<script>
export default {
  name: 'loading-spinner',

  props: {
    active: Boolean,
  },

  computed: {},

  watch: {
    active(value) {
      this.isActive = value;
    },
  },

  data() {
    return {
      isActive: this.active,
    };
  },
};
</script>

<template lang="pug">
  transition(name="fade" mode="out-in")
    div.loading-spinner
</template>

<style>
/* Absolute Center Spinner */
.loading-spinner {
  position: fixed;
  z-index: 1000;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  padding: 0;
  top: 22px;
  left: 22px;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
.loading-spinner:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
}

.loading-spinner:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  box-shadow:
    #7d1aba 1.5em 0 0 0,
    #1ccacd 1.1em 1.1em 0 0,
    #7d1aba 0 1.5em 0 0,
    #1ccacd -1.1em 1.1em 0 0,
    #7d1aba -1.5em 0 0 0,
    #1ccacd -1.1em -1.1em 0 0,
    #7d1aba 0 -1.5em 0 0,
    #1ccacd 1.1em -1.1em 0 0;
}

/* Animation */
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
