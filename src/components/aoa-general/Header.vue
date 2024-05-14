<script>
import { ref } from 'vue';

import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultImageUrl =
      'https://storage.pardot.com/979203/1682623667W6SwDyna/aoa_blue_1.png';
    const defaultLink = 'https://osteopathic.org';

    const imageUrl = ref(defaultImageUrl);
    const link = ref(defaultLink);

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    function reset() {
      imageUrl.value = defaultImageUrl;
      link.value = defaultLink;
    }

    return {
      imageUrl,
      link,
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
    include ../../views/aoa-general/forms/header
    include ../../views/aoa-general/renders/header
</template>

<style scoped></style>
