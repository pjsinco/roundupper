<script>
import { ref, computed, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { getRenderer } from '@/composables/useMdRendererForAffiliates';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const renderer = getRenderer();
    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInput = `# Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`;
    const input = ref(defaultInput);

    function initEditor() {
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, 'calc(100vh - 400px)');
    }

    onMounted(initEditor);

    const output = computed(() => {
      return marked(input.value);
    });

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      window.location.reload();
      //input.value = defaultInput;
    }

    return {
      input,
      props,
      reset,
      copy,
      copyTextVersion,
      output,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/affiliates/forms/news-item
    include ../../views/affiliates/renders/news-item

</template>

<style scoped></style>
