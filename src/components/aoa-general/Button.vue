<script>
import Workspace from '@/components/Workspace.vue';
import { useButtonSetup } from '@/composables/button-setup';

export default {
  components: {
    Workspace,
  },

  setup() {
    const ButtonSetup = useButtonSetup();

    return {
      ...ButtonSetup,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/aoa-general/forms/button
    include ../../views/aoa-general/renders/button
</template>

<style>
@media only screen and (min-width: 480px) {
  .mj-column-per-100 {
    width: 100% !important;
    max-width: 100%;
  }

  .mj-column-per-25 {
    width: 25% !important;
    max-width: 25%;
  }

  .mj-column-per-75 {
    width: 75% !important;
    max-width: 75%;
  }
}
.moz-text-html .mj-column-per-100 {
  width: 100% !important;
  max-width: 100%;
}

.moz-text-html .mj-column-per-25 {
  width: 25% !important;
  max-width: 25%;
}

.moz-text-html .mj-column-per-75 {
  width: 75% !important;
  max-width: 75%;
}
</style>
