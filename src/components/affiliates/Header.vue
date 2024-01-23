<script>
import { ref } from 'vue';
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
    const defaultImageUrl =
      'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcy/979203/1704489954EkPSyrF7/affiliate_header_message_from_affiliate_relations.png';

    const imageUrl = ref(defaultImageUrl);
    const altText = ref('');

    const reset = () => {
      imageUrl.value = '';
      altText.value = '';
    };

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    return {
      imageUrl,
      altText,
      props,
      reset,
      copy,
      copyTextVersion,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/affiliates/forms/header
    include ../../views/affiliates/renders/header

</template>

<style scoped></style>
