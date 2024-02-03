<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import SelectTemplate from '@/components/SelectTemplate.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import { toastClose } from '@/composables/useToast';
//import { handleTemplateSelect } from '@/composables/useHandleTemplateSelect';

export default {
  components: {
    Navbar,
    SelectTemplate,
    RouterView,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const handleTemplateSelect = (path) => {
      router.push(path);
    };

    return {
      handleTemplateSelect,
    };
  },
};
</script>

<template lang="pug">
div.blank
  navbar(templateName="AoaGeneral")
    template(v-slot:select)
      select-template(v-on:template-selected="handleTemplateSelect")
        option(value="/aoa-general/icon-list") Icon list
    transition(name="fade" appear mode="out-in")
      component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")
  RouterView

  include ../views/includes/toast
</template>

<style scoped></style>
