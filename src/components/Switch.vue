<script setup>
import { ref, defineModel } from 'vue';

const includeImage = defineModel();

const id = `switch-${Math.floor(1000 * Math.random() * 4000)}`;
</script>

<template lang="pug">
  label(:for="id").switch__label
    input(
      type="checkbox" 
      :id="id" 
      v-model="includeImage"
    ).switch.sr-only.peer
    div.switch__div.peer
    span.switch__text
</template>

<style>
.sr-only {
  clip: rect(0, 0, 0, 0) !important;
  border-width: 0 !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
.switch {
}

.switch__div {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  background-color: var(--grey);
  border-radius: 9999px;
}

.switch__div::after {
  content: '';
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  top: 2px;
  left: 2px;
  inset-inline-start: 2px;
  transition-duration: 0.15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  border-color: var(--grey);
  border-width: 1px;
  border-radius: 9999px;
}

.switch__label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

/*.peer ~ .peer::after {
  background-color: fuchsia !important;
}*/

.peer:checked ~ .peer::after {
  transform: translateX(100%);
  border-color: #fff;
  background-color: fuchsia !important;
}
</style>
