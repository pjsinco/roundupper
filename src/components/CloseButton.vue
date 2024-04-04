<script>
import { ref } from 'vue';
import ButtonLink from '@/components/ButtonLink.vue';

export default {
  components: {
    ButtonLink,
  },

  setup() {
    return {};
  },
};
</script>

<template lang="pug">
  ButtonLink(@click="includeButton = true").pull-right
    template(v-slot:text)
      | Remove
</template>

<style>
.close-button {
  cursor: pointer;
}
</style>
