<script>
import { ref, onMounted, provide, watch } from 'vue';

export default {
  setup(_, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(null);

    function handleClick(title) {
      selectedTitle.value = title;
    }

    provide('selectedTitle', selectedTitle);

    onMounted(() => {
      if (!tabTitles.value.length) return;

      selectedTitle.value = tabTitles.value[0];
    });

    return {
      handleClick,
      tabTitles,
      selectedTitle,
    };
  },
};
</script>

<template lang="pug">
  div.tabs
    ul.tabs__header
      li(v-for="title in tabTitles" :key="title")
        button(v-text="title" @click="selectedTitle = title")

    slot
</template>

<style>
.tabs {
}
.tabs__header {
  display: flex;
  list-style: none;
}
</style>
