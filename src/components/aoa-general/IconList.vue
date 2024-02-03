<script>
import { ref, computed, nextTick } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { debounce } from 'lodash-es';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const renderer = {
      paragraph(text) {
        //return `
        //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
        return `
          <p style="margin: 0 0 0 0;">${text}</p>`;
      },

      heading(text, level) {
        if (level == 1) {
          const h1styles = [
            'color: #000066;',
            'font-size: 20px;',
            'font-weight: bold;',
            'line-height: 28px;',
            'margin-bottom: 12px;',
            'margin-top: 0;',
            'text-align: left',
          ];
          return `<h1 style="${h1styles.join('; ')}">${text}</h1>\n`;
        }

        return;
      },

      link(href, title, text) {
        return `
          <a href="${href}" 
             style="color: #22a49c; font-weight: bold; text-decoration: none;"
             title="${title}">${text}</a>`;
      },

      list(body, ordered) {
        const divStyles = [
          'text-align: left',
          'color: #141416',
          'margin: 0',
          'padding: 0',
          'font-family: Arial, sans-serif',
          'font-size: 16px',
          'font-weight: normal',
          'line-height: 24px',
        ];

        const listStyles = [
          'color: #141416',
          'margin: 25px 0 25px 25px',
          'padding: 0',
          'font-family: Arial, sans-serif',
          'font-size: 16px',
          'line-height: 24p',
        ];

        const listType = ordered ? 'ol' : 'ul';
        const listStyleType = ordered ? '1' : 'disc';
        console.log('ordered', ordered);
        console.log('listType', listType);

        return `
          <div class="forOutlooks" pardot-region="unordered_list" style="${divStyles.join('; ')}">
            <${listType} 
              class="glist" 
              style="${listStyles.join('; ')}" 
              align="left" 
              type="${listStyleType}"
            >
              ${body}</ol>
            <${listType}></div>\n`;
      },
    };

    marked.use({ renderer });

    marked.setOptions({
      gfm: true,
      headerIds: false,
    });

    const defaultImageUrl =
      'https://resources.osteopathic.org/l/979203/2024-02-01/czs3n/979203/17067972618vJSBE23/placeholder_100px.png';

    const imageUrl = ref(defaultImageUrl);
    const input = ref('');
    const reset = () => {
      input.value = '';
      imageUrl.value = '';
    };

    const output = computed(() => {
      return marked(input.value);
    });

    nextTick(() => {
      input.value = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`;
    });

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    return {
      input,
      imageUrl,

      props,
      reset,
      copy,
      copyTextVersion,
      output,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/icon-list
    include ../../views/aoa-general/renders/icon-list

</template>

<style>
@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
  }

  .mj-column-per-25 {
    width: 25% !important;
    max-width: 25%;
  }

  .mj-column-per-75 {
    width: 75% !important;
    max-width: 75%;
  }
}
</style>
