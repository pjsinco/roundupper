<script>
import { ref } from 'vue';

export default {
  props: {
    shouldShow: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template lang="pug">
  div.option
    div.option__front
      div.option__head
        slot(name="head")
      div.option__tail
        slot(name="tail")
    div(v-if="props.shouldShow").option__show
      div.option__show-item
        slot(name="show")
</template>

<style>
.option {
  display: grid;
}

.option__front {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.25rem;
}

.option__front,
.option__show {
  grid-column: 1;
  grid-row: 1;
}

.option:first-child {
  margin-top: -1.25rem;
}

.option + .option {
  border-top: 1px solid var(--grey);
}

.option__head {
  font-size: 18px;
  font-weight: 500;
  color: var(--dark);
}
</style>
