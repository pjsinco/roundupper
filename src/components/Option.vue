<script>
import { ref } from 'vue';

export default {
  setup() {
    return {};
  },
};
</script>

<template lang="pug">
  div.option
    div.option__head
      slot(name="head")
    div.option__tail
      slot(name="tail")
</template>

<style>
.option {
  display: flex;
  justify-content: space-between;
}
</style>
