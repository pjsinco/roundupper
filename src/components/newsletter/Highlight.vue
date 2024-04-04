<script>
import { ref, onMounted, nextTick, computed } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { useButtonSetup } from '@/composables/button-setup';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { useAddImageAttributes } from '@/composables/add-image-attributes';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml } from '@/composables/useButtonFunctions';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  setup() {
    const { renderer } = useRendererForNewsletter();
    const { errorAddingImageAttr } = useAddImageAttributes();

    if (errorAddingImageAttr.value) {
      console.error('Error adding attributes to image.');
    }

    console.log('hi');

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultInputLines = [
      '### Lorem ipsum',
      '* Donec id elit non mi porta gravida at eget metus.',
      '* Nulla vitae elit libero, a pharetra augue.',
      '* Etiam porta sem malesuada magna mollis euismod.',
    ];

    const input = ref(defaultInputLines.join('\n'));
    const output = computed(() => {
      return marked(input.value);
    });

    function initEditor() {
      const el = document.getElementById('input');
      const editor = editorFromTextArea(input, el, '300px');
    }

    onMounted(() => {
      nextTick(initEditor);
    });

    function reset() {
      window.location.reload();
    }

    function copy() {
      copyHtml();
    }

    return {
      input,
      output,
      reset,
      copy,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/newsletter/forms/highlight
    include ../../views/newsletter/renders/highlight

</template>

<style scoped></style>
