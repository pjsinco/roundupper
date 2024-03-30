<script>
import { ref, computed, onMounted, nextTick } from 'vue';
import Workspace from '@/components/Workspace.vue';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';
import Switch from '@/components/Switch.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';
import Constants from '@/constants/newsletter';

export default {
  components: {
    Workspace,
    Tabs,
    Tab,
    Switch,
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
    const defaultHeadline = '### Lorem ipsum dolor';
    const defaultImageUrl = 'https://picsum.photos/150/150';

    const input = ref(defaultInput);
    const headline = ref(defaultHeadline);
    const imageUrl = ref(defaultImageUrl);
    const caption = ref('');
    const includeImage = ref(true);
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
        const textEditor = editorFromTextArea(input, textEl, '350px');

        const headlineEl = document.getElementById('headline');
        const headlineEditor = editorFromTextArea(headline, headlineEl, '72px');
      });
    }

    onMounted(initEditors);

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
      caption.value = '';
    }

    return {
      input,
      headline,

      output,
      headlineOutput,
      props,
      reset,
      copy,
      copyTextVersion,
      imageUrl,
      caption,
      includeImage,
      includeButton,
      dividerAbove,
      imageTdStyle,
      bookmark,
      tabRef,
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
