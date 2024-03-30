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
  width: 3.75rem;
  height: 2rem;
  background-color: var(--grey);
  border-radius: 9999px;
}

.peer:not(:checked) ~ .switch__div::after {
  background-image: none;
}

.switch__div::after {
  content: '';
  position: absolute;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 12 12' fill='%237d1aba' width='12' height='12' x='6' y='6' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false'%3E%3Cpath d='m10.5 1.939 1.061 1.061-7.061 7.061-.53-.531-3-3-.531-.53 1.061-1.061 3 3 5.47-5.469z'%3E%3C/path%3E%3C/svg%3E");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 1.75rem;
  height: 1.75rem;
  top: 2px;
  left: 3.75rem;
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

.switch__div > svg {
  display: block;
  position: absolute;
  left: 38px;
  top: 10px;
  z-index: 1;
  width: 12px;
  height: 12px;
  opacity: 0;
  transition: opacity 0.15s;
  fill: var(--primary-color);
}

.peer:checked ~ .switch__div {
  background-color: var(--primary-color);
}

.peer:checked ~ .switch__div > svg {
  opacity: 1;
}

.peer:checked ~ .peer::after {
  transform: translateX(100%);
  border-color: #fff;
  background-color: #fff;
}
</style>
