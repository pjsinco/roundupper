<script>
import { ref, computed } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const text = ref('Learn more');
    const link = ref('');
    const spaceAbove = ref(true);
    const spaceBelow = ref(true);

    function copy() {
      // our inline style 'mso-padding-alt' gets stripped
      // somewhere along the line, so we need to add it back in.
      const addMsoStyle = (html) => {
        const fragment = new DocumentFragment();
        const div = document.createElement('div');
        div.innerHTML = html;
        fragment.append(div);

        // now we can use a DOM methods
        const tdEl = fragment.getElementById('msoPadding');
        const styleAttr = tdEl.getAttribute('style');
        const newStyleAttr = `${styleAttr} mso-padding-alt: 10px 32px;`;
        tdEl.setAttribute('style', newStyleAttr);

        return fragment.firstElementChild.innerHTML;
      };

      copyHtml(addMsoStyle);
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      text.value = 'Learn more';
      link.value = '';
    }

    const buttonTdStyle = computed(() => {
      return {
        direction: 'ltr',
        fontSize: '0px',
        paddingTop: spaceAbove.value ? '20px' : '0',
        paddingBottom: spaceBelow.value ? '20px' : '0',
        paddingLeft: '0px',
        textAlign: 'center',
      };
    });

    return {
      link,
      spaceAbove,
      spaceBelow,
      buttonTdStyle,
      text,
      props,
      reset,
      copy,
      copyTextVersion,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/button
    include ../../views/aoa-general/renders/button
</template>

<style>
@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
  }

  .mj-column-per-25 {
    width: 25% !important;
    max-width: 25%;
  }

  .mj-column-per-75 {
    width: 75% !important;
    max-width: 75%;
  }
}
.moz-text-html .mj-column-per-100 {
  width: 100% !important;
  max-width: 100%;
}

.moz-text-html .mj-column-per-25 {
  width: 25% !important;
  max-width: 25%;
}

.moz-text-html .mj-column-per-75 {
  width: 75% !important;
  max-width: 75%;
}
</style>
