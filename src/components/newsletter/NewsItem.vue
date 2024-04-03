<script>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
  onUpdated,
} from 'vue';
import Workspace from '@/components/Workspace.vue';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';
import Switch from '@/components/Switch.vue';
import Option from '@/components/Option.vue';
import ButtonLink from '@/components/ButtonLink.vue';
import CloseButton from '@/components/CloseButton.vue';
import ItemGroup from '@/components/ItemGroup.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { useButtonSetup } from '@/composables/button-setup';
import { marked } from 'marked';
import Constants from '@/constants/newsletter';

export default {
  components: {
    Workspace,
    Tabs,
    Tab,
    Switch,
    Option,
    ButtonLink,
    CloseButton,
    ItemGroup,
  },

  props: ['currentTemplate'],

  setup(props) {
    const { renderer } = useRendererForNewsletter();
    let renderedEl = null;
    let observer = null;
    const config = { attributes: true, childList: true, subtree: true };
    const insertedNodes = [];

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInput = Constants.DEFAULT_TEXT_MD;
    const defaultHeadline = '### Lorem ipsum dolor';
    const defaultImageUrl = 'https://picsum.photos/150/150';

    const input = ref(defaultInput);
    const headline = ref(defaultHeadline);
    const imageUrl = ref(defaultImageUrl);
    const caption = ref('');
    const includeImage = ref(false);
    const includeButton = ref(true);
    const dividerAbove = ref(true);
    const bookmark = `bookmark-${Math.floor(1000 * Math.random() * 4000)}`;
    const tabRef = ref({});

    const output = computed(() => {
      return marked(input.value);
    });
    const headlineOutput = computed(() => {
      return marked(headline.value);
    });
    const imageTdStyle = computed(() => {
      return {
        paddingTop: '3px',
        paddingBottom: caption.value == '' ? '18px' : '0px',
        paddingLeft: '24px',
        paddingRight: '0px',
        lineHeight: '1px',
      };
    });

    function initEditors() {
      nextTick(() => {
        const textEl = document.getElementById('input');
        const textEditor = editorFromTextArea(input, textEl, '300px');

        const headlineEl = document.getElementById('headline');
        const headlineEditor = editorFromTextArea(headline, headlineEl, '72px');
      });
    }

    function handleImageLoad(evt) {
      evt.currentTarget.displayWidth = evt.currentTarget.naturalWidth;
      evt.target.removeEventListener('load', handleImageLoad);
    }

    onMounted(() => {
      initEditors();
      renderedEl = document.querySelector('#rendered');
      observer = new MutationObserver((mutations, observer) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            // make sure new node type is one we can look for images inside of
            if (typeof node.getElementsByTagName !== 'function') return;

            const imgs = node.getElementsByTagName('img');

            if (imgs.length) {
              for (let i = 0, len = imgs.length; i < len; i++) {
                let width;
                imgs[i].displayWidth = null;
                if (!imgs[i].complete) {
                  imgs[i].addEventListener('load', handleImageLoad, {
                    once: true,
                  });
                } else {
                  width = imgs[i].naturalWidth;
                }
                console.log(
                  "width (should always be a value that isn't 0): ",
                  width
                );
                imgs[i].setAttribute(
                  'width',
                  Math.min(width, Constants.Layout.liveAreaWidth)
                );
              }
            }
          });
        });
      });

      observer.observe(renderedEl, config);
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    function handleAddImage() {
      includeImage.value = true;
    }

    function handleAddButton() {
      console.log('okaddbutton');
      includeButton.value = true;
    }

    // function copy() {
    //   copyHtml();
    // }

    // function copyTextVersion() {
    //   copyText();
    // }

    const { text, link, spaceAbove, spaceBelow, copy, buttonTdStyle } =
      useButtonSetup({ spaceAbove: true, spaceBelow: false });

    function reset() {
      window.location.reload();

      //input.value = defaultInput;
      //headline.value = defaultHeadline;
      //imageUrl.value = defaultImageUrl;
      //caption.value = '';
    }

    return {
      input,
      headline,
      output,
      headlineOutput,
      props,
      reset,
      copy,
      imageUrl,
      caption,
      includeImage,
      includeButton,
      dividerAbove,
      imageTdStyle,
      bookmark,
      tabRef,
      handleAddImage,
      handleAddButton,
      text,
      link,
      spaceAbove,
      spaceBelow,
      buttonTdStyle,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/newsletter/forms/news-item
    include ../../views/newsletter/renders/news-item

</template>

<style scoped></style>
