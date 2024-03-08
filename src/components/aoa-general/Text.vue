<script>
import { ref, computed, onMounted } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { useRendererForAoaGeneral } from '@/composables/renderer-aoa-general';
import { useEditorFromTextArea } from '@/composables/useEditorFromTextArea';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultInput = `# Lorem ipsum dolor sit amet\nConsectetur adipisicing **elit**, sed do *eiusmod* [tempor incididunt](https://osteopathic.org) ut labore et dolore magna aliqua.\n`;
    const input = ref(defaultInput);
    const centerText = ref(false);
    let editor = null;

    const { renderer } = useRendererForAoaGeneral();

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const output = computed(() => {
      return marked(input.value);
    });

    const divStyle = computed(() => {
      return {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '24px',
        textAlign: centerText.value ? 'center' : 'left',
        color: '#2a2a2a',
      };
    });

    function initEditor() {
      const el = document.getElementById('input');
      editor = useEditorFromTextArea(input, el, 'calc(100vh - 425px)');
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

    function makeLink(evt) {
      const selection = editor.getSelection();
      const { line, ch } = editor.getCursor('anchor');

      // Make sure there are no new-lines in selection
      if (selection.indexOf('\n') > 0) {
        return;
      }

      // Check immediately-surrounding chars to see if
      // they're [ && ], which would mean there's already
      // a link there.
      const linkCheckRange = editor.getRange(
        { line, ch: ch - 1 },
        { line, ch: ch + selection.length + 1 }
      );
      const firstChar = linkCheckRange.charAt(0);
      const lastChar = linkCheckRange.charAt(linkCheckRange.length - 1);
      if (firstChar == '[' && lastChar == ']') {
        return;
      }

      const startOfStrToHighlight = ch + selection.length + ']('.length + 1;
      const endOfStrToHighlight = startOfStrToHighlight + 'url'.length;

      editor.replaceSelection('[' + selection + '](url)');
      editor.setSelection(
        { line, ch: startOfStrToHighlight },
        { line, ch: endOfStrToHighlight }
      );
      editor.focus();
    }

    onMounted(initEditor);

    return {
      input,
      output,
      centerText,
      divStyle,

      props,
      reset,
      copy,
      copyTextVersion,
      makeLink,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/text
    include ../../views/aoa-general/renders/text
</template>

<style></style>
