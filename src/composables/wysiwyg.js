export function useWysiwyg() {
  function makeLink(editor) {
    const selection = editor.getSelection();

    // We need a selection in order to make a link
    if (selection === '') {
      return;
    }

    // Make sure there are no new-lines in selection
    if (selection.indexOf('\n') > 0) {
      return;
    }

    const { line, ch } = editor.getCursor('anchor');

    // Check immediately-surrounding chars to see if
    // they're [ && ], which would mean there's already
    // a link there.
    const { open, close } = getSurrounding(
      editor,
      line,
      line,
      ch,
      ch + selection.length
    );

    console.log('open, close', open, close);

    if (open == '[' && close == ']') {
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

  function surround(
    editor,
    str,
    cursorPos,
    prefix,
    suffix,
    setNewSelection = true
  ) {
    const { line, ch } = cursorPos;

    if (str === '') {
      editor.replaceSelection(prefix + suffix);
      editor.setCursor({ line, ch: ch + prefix.length });
    } else {
      editor.replaceSelection(`${prefix}${str}${suffix}`);

      if (setNewSelection) {
        editor.setSelection(
          { line, ch: ch + prefix.length },
          { line, ch: ch + suffix.length + str.length }
        );
      }
    }
  }

  /**
   * Get immediately-surrounding characters
   *
   */
  function getSurrounding(
    editor,
    line1,
    line2,
    chStart,
    chEnd,
    countBefore = 1,
    countAfter = 1
  ) {
    const checkRange = editor.getRange(
      { line: line1, ch: chStart - countBefore },
      { line: line2, ch: chEnd + countAfter },
      '\n'
    );
    console.log('checkRange', checkRange);
    const firstChar = checkRange.slice(0, countBefore);
    const lastChar = checkRange.slice(-countAfter);

    return {
      open: firstChar,
      close: lastChar,
    };
  }

  function makeBold(editor) {
    const selection = editor.getSelection();
    const cursorPos = editor.getCursor('anchor');

    const { open, close } = getSurrounding(
      editor,
      cursorPos.line,
      cursorPos.line,
      cursorPos.ch,
      cursorPos.ch + selection.length,
      2,
      2
    );

    const notAllowed = '**';
    if (open == notAllowed && close == notAllowed) {
      return;
    }

    surround(editor, selection, cursorPos, '**', '**');

    editor.focus();
  }

  function makeItalic(editor) {
    const selection = editor.getSelection('\n');
    const cursorPos = editor.getCursor('anchor');
    let atEndOfLine = false;
    let countBefore = 3;
    let countAfter = 3;
    let isMultiline = false;

    window.editor = editor;
    const { line: endline, ch: endch } = editor.getCursor('to');

    if (endline > cursorPos.line) {
      isMultiline = true;
      console.log('ok multiline');
    }

    // check if we're at the end of
    const lineLength = editor.getLine(cursorPos.line).length;
    const charsLeftInLine = lineLength - (cursorPos.ch + selection.length);
    if (charsLeftInLine < 3) {
      console.log('ok at the end of line');
      atEndOfLine = true;
      countBefore = charsLeftInLine;
      countAfter = charsLeftInLine;
    }

    let { open, close } = getSurrounding(
      editor,
      cursorPos.line,
      endline,
      cursorPos.ch,
      endch + selection.length,
      countBefore,
      countAfter
    );

    console.log('open, close');
    console.log(`|${open}|      |${close}|`);

    // check if we're at the end of a line

    if (atEndOfLine) {
      if (open === '**' && close == '**') {
        // add ital to already-bolded
        surround(editor, selection, cursorPos, '*', '*');
      } else if (open.slice(-1) === '*' && close.slice(0, 1) === '*') {
        // already italic, so unitalicize
        editor.extendSelection(
          { line: cursorPos.line, ch: cursorPos.ch - 1 },
          { line: cursorPos.line, ch: cursorPos.ch + selection.length + 1 }
        );
        const newSelection = editor.getSelection();
        editor.replaceSelection(newSelection.slice(1).slice(0, -1));
        editor.setSelection(
          { line: cursorPos.line, ch: cursorPos.ch - 1 },
          { line: cursorPos.line, ch: cursorPos.ch + selection.length - 1 }
        );
      } else {
        // ital it
        surround(editor, selection, cursorPos, '*', '*');
      }

      editor.focus();
      return;
    }

    if (open === '***' && close === '***') {
      // is it already bold-italic?
      console.log('already bold ital, so remove ital');

      // remove italics
      editor.extendSelection(
        { line: cursorPos.line, ch: cursorPos.ch - 3 },
        { line: cursorPos.line, ch: cursorPos.ch + selection.length + 3 }
      );
      const newSelection = editor.getSelection();
      editor.replaceSelection(newSelection.slice(1).slice(0, -1));
      editor.setSelection(
        { line: cursorPos.line, ch: cursorPos.ch - 1 },
        { line: cursorPos.line, ch: cursorPos.ch + selection.length - 1 }
      );
    } else if (open.slice(1, 3) === '**' && close.slice(0, 2) == '**') {
      // is it already bold?
      console.log('already bold, so add ital');

      // add ital to already-bolded
      surround(editor, selection, cursorPos, '*', '*');
    } else if (open.slice(-1) === '*' && close.slice(0, 1) == '*') {
      // is it already italic?
      console.log('already italic, so unitalicize');

      // already italic, so unitalicize
      editor.extendSelection(
        { line: cursorPos.line, ch: cursorPos.ch - 1 },
        { line: cursorPos.line, ch: cursorPos.ch + selection.length + 1 }
      );
      const newSelection = editor.getSelection();
      editor.replaceSelection(newSelection.slice(1).slice(0, -1));
      editor.setSelection(
        { line: cursorPos.line, ch: cursorPos.ch - 1 },
        { line: cursorPos.line, ch: cursorPos.ch + selection.length - 1 }
      );
    } else {
      // ok, just make it italic
      console.log('just make it ital');

      surround(editor, selection, cursorPos, '*', '*');
    }

    editor.focus();
  }

  return {
    makeLink,
    makeBold,
    makeItalic,
  };
}
