<script>
import { ref } from 'vue';

export default {
  props: {
    closer: {
      type: Boolean,
    },
    title: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    console.log('hello');
    return {
      props,
    };
  },
};
</script>

<template lang="pug">
  div(style="margin-top: -1px; margin-bottom: -1px").item-group
    h4(style="margin-top: 13px;") 
      | {{ props.text }} #[CloseButton(@click="props.closer = false")]
    slot
</template>

<style scoped></style>
