<script>
import { ref, computed, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';
import Constants from '@/constants/newsletter';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const { renderer } = useRendererForNewsletter();

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInput = Constants.DEFAULT_TEXT_MD;
    const defaultHeadline = 'Lorem ipsum dolor';
    const defaultImageUrl = 'https://picsum.photos/150/150';

    const input = ref(defaultInput);
    const headline = ref(defaultHeadline);
    const imageUrl = ref(defaultImageUrl);
    const altText = ref('');

    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      console.log('init');
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, '250px');
    }

    onMounted(initEditor);

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      input.value = defaultInput;
      headline.value = defaultHeadline;
      imageUrl.value = defaultImageUrl;
      altText.value = '';
    }

    return {
      input,
      output,
      props,
      reset,
      copy,
      copyTextVersion,
      headline,
      imageUrl,
      altText,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/newsletter/forms/news-item-with-image
    include ../../views/newsletter/renders/news-item-with-image

</template>

<style scoped></style>
