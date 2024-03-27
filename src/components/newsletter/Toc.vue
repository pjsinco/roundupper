<script>
import { ref } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { useRendererForNewsletter } from '@/composables/renderer-newsletter';
import { editorFromTextArea } from '@/composables/useEditorFromTextArea';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { marked } from 'marked';
import axios from 'axios';
import cheerio from 'cheerio';

export default {
  components: {
    Workspace,
  },

  setup() {
    const urlToFetch = ref('');

    const { renderer } = useRendererForNewsletter();

    marked.use({ renderer });
    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    async function handleSubmit() {
      const url = 'http://localhost:5001/toc';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlToFetch.value }),
      });
      const body = await response.text();

      console.log(JSON.parse(body).data.join('\n'));
    }

    return {
      urlToFetch,
      handleSubmit,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/newsletter/forms/toc
    include ../../views/newsletter/renders/toc
</template>

<style scoped></style>
