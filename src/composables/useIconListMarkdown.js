import { marked } from 'marked';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import { mdRendererForAoaGeneral } from '@/composables/useMdRendererForAoaGeneral';
import { debounce } from 'lodash-es';
import { ref, computed, onMounted } from 'vue';

export default function getMarkdownEditor(id) {

  setup() {
    function initEditor() {
      const editor = CodeMirror.fromTextArea(document.getElementById('input'), {
        lineNumbers: true,
        mode: 'markdown',
        lineWrapping: true,
      });

      editor.setSize('100%', '100px');

      editor.on('change', () => {
        input.value = editor.getValue();
      });
    }

    onMounted(initEditor);
  }

}
