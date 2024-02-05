import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';

export function editorFromTextArea(model, textAreaEl, size = '80px') {
  const editor = CodeMirror.fromTextArea(textAreaEl, {
    mode: 'markdown',
    lineWrapping: true,
  });
  editor.setSize('100%', size);
  editor.on('change', () => {
    model.value = editor.getValue();
  });

  return editor;
}
