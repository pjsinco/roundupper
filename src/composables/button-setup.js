import { ref, computed } from 'vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export function useButtonSetup() {
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
    text,
    link,
    spaceAbove,
    spaceBelow,
    copy,
    copyTextVersion,
    reset,
    buttonTdStyle,
  };
}
