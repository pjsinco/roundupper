<script>
import { ref } from 'vue';

export default {
  setup() {
    return {};
  },
};
</script>

<template lang="pug">
  button().button-link
    slot(name="text")

</template>

<style>
.button-link {
  margin-right: 0;
  padding: 0;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: underline;
  line-height: 1.4;
  color: var(--dark);
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
}

.button-link__text {
}
</style>
