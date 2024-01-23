import { popUpToast } from '@/composables/useToast';

function reset() {
  const reset = () => {
    Object.assign(state, initialState);
  };
}

function clipboardSuccess(
  el,
  title = 'Copied!',
  message = 'Ready to paste',
  color = '#1ccacd'
) {
  const rendered = document.getElementById('rendered');
  rendered.classList.add('animated', 'jello');

  rendered.addEventListener(
    'animationend',
    (evt) => {
      console.log('evt', evt);
      this.classList.remove('animated', 'jello');
    },
    { once: true }
  );

  popUpToast(title, message, color);

  //el.classList.add('tooltipped', 'tooltipped-w')
}

function collapseSelection(elementId) {
  const elem = document.getElementById(elementId);

  if (window.getSelection()) {
    window.getSelection().collapse(elem, 0);
  }
}

function getRenderedHtml() {
  return document.getElementById('rendered').innerHTML;
}

function cloneHtml(html) {
  document.getElementById('clone').innerText = html;
}

/**
 * Copy HTML of the rendered element
 *
 * @param {function} manipulate Function to execute on markup
 *   of the rendered element, such as find-replace.
 */
function copyHtml(manipulate = (html) => html) {
  collapseSelection('clone');

  console.log('manipulate', manipulate);

  const rawHtml = getRenderedHtml();

  let html = manipulate(rawHtml);

  cloneHtml(html);

  const clipboard = new ClipboardJS('#copyHtml', {
    target: function (trigger) {
      return document.getElementById('clone');
    },
  });

  clipboard.on('success', (evt) => {
    clipboardSuccess(
      document.getElementById('copyHtml'),
      'HTML code copied',
      'The HTML code is copied to your clipboard. Ready to paste!',
      '#ff3366'
    );
    clipboard.destroy();
  });
}

function copyText(text) {
  const clipboard = new ClipboardJS('#copyTextVersion', {
    text: (trigger) => text,
  });

  clipboard.on('success', function (evt) {
    console.log('okclipboardsuccess');
    clipboardSuccess(
      document.getElementById('copyTextVersion'),
      'Text version copied',
      'The text version is copied to your clipboard. Ready to paste!',
      '#1ccacd'
    );
    clipboard.destroy();
  });
}

export { reset, copyHtml, copyText };
