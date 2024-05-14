<script>
import { ref, watch } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { find } from 'lodash-es';
import { marked } from 'marked';
import Constants from '@/constants/affiliate-news';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const headers = Constants.SECTION_HEADERS;

    const selected = ref(headers[0].short);
    const altText = ref(headers[0].name);
    const imageUrl = ref(headers[0].url);

    watch(selected, (newSelected) => {
      const header = find(headers, function (h) {
        return h.short === newSelected;
      });

      imageUrl.value = header.url;
      altText.value = header.name;
    });

    const reset = () => {
      selected.value = headers[0].short;
      imageUrl.value = headers[0].url;
      altText.value = headers[0].name;
    };

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    return {
      imageUrl,
      altText,
      selected,
      headers,
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
    include ../../views/affiliates/forms/section-head
    include ../../views/affiliates/renders/section-head

</template>

<style scoped></style>
