<script>
import { ref } from 'vue';

export default {
  emits: ['template-selected'],

  setup(props, { emit }) {
    const handleChange = (evt) => {
      emit('template-selected', evt.target.value);
    };

    return {
      handleChange,
    };
  },
};
</script>

<template lang="pug">
  form.form-inline#selectArticleType
    div.form-group
      label(for="articleType") Select component to create
      select.form-control.input-sm#articleType(name="type" @change="handleChange")
        slot
</template>

<style></style>
