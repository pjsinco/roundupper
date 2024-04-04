<script>
import { inject } from 'vue';

export default {
  props: ['title'],

  setup(props) {
    const selectedTitle = inject('selectedTitle');

    return {
      selectedTitle,
    };
  },
};
</script>

<template lang="pug">
  div(role="tabpanel" v-show="selectedTitle == title")
    slot
</template>

<style scoped></style>
