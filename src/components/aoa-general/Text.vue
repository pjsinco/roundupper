<script>
import { ref, computed, onMounted } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { mdRendererForAoaGeneral } from '@/composables/useMdRendererForAoaGeneral';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultInput = `# Lorem ipsum dolor sit amet\nConsectetur adipisicing **elit**, sed do *eiusmod* [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.\n`;
    const input = ref(defaultInput);

    const renderer = mdRendererForAoaGeneral();

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, 'calc(100vh - 275px)');
    }

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      input.value = defaultInput;
    }

    onMounted(initEditor);

    return {
      input,
      output,
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
    include ../../views/aoa-general/forms/text
    include ../../views/aoa-general/renders/text
</template>

<style scoped></style>
