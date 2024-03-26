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
      // TODO for now
      return;

      const encodedUrl = encodeURIComponent(urlToFetch.value);
      console.log('encodedUrl', encodedUrl);
      const url = `https://corsproxy.io/?${encodedUrl}`;

      fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        //headers: {
        //  'Content-Type': 'text/html',
        //},
      })
        .then((res) => {
          return res.text();
        })
        .then((text) => {
          console.log('text', text);
        })
        .catch((err) => {
          console.error(err);
        });

      // const bookmarks = document.querySelectorAll('a[id*="bookmark-"]');
      // const makeLink = function(anchor) { return `* [${anchor.nextElementSibling.querySelector('h3').innerText}](#${anchor.id})`; };
      // const links = Array.from(bookmarks).map(makeLink);
      // console.log(links.join('\n'));
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
