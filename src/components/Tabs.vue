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
      li(
        v-for="title in tabTitles" 
        :key="title"
        :class="[ selectedTitle == title ? 'selected' : '' ]"
      )
        button(v-text="title" @click="selectedTitle = title")
    hr.tabs__line

    slot
</template>

<style>
.tabs {
}

.tabs__header {
  display: flex;
  margin-bottom: 0;
  padding-bottom: 6px;
  padding-left: 0;
  list-style: none;
}

.tabs__header li {
  position: relative;
}

.tabs__header li.selected::after {
  content: '';
  position: absolute;
  left: 0;
  right: 34px;
  bottom: -6px;
  border-bottom: 2px solid var(--dark);
}

.tabs__header li button {
  margin-right: 1.5rem;
  padding: 10px;
  font: inherit;
  font-size: 1rem;
  background: none;
  color: inherit;
  border: none;
  border-radius: var(--border-radius-button);
  cursor: pointer;
  outline: inherit;
}

.tabs__header li:not(.selected) button {
  color: var(--grey-dark);
}

.tabs__header li button:hover {
  background-color: var(--grey-light);
}

.tabs__header li button:first-child {
  margin-left: -10px;
}

.tabs__line {
  margin-top: 0;
  /*border-width: 1px 0 0;*/
  border-top: 1px solid var(--grey);
}
</style>
