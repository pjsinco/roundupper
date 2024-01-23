<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import SelectTemplate from '@/components/SelectTemplate.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import { toastClose } from '@/composables/useToast';

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
  navbar(templateName="The DO")
    template(v-slot:select)
      //-select-template(v-on:template-selected="handleTemplateSelect" v-model="selected")
      select-template(v-on:template-selected="handleTemplateSelect")
        optgroup(label="Stories")
          option(value="/the-do/top-story") Top Story
          option(value="/the-do/feature") Feature
          //option(value="/the-do/brief") Brief
        optgroup(label="Other parts")
          option(value="/the-do/ad") Ad
          //option(value="/the-do/quote") Quote
          //option(value="/the-do/section-title") Section Title
          option(value="/the-do/note") Note
          option(value="/the-do/sponsored-content") Sponsored Content
          option(value="/the-do/date" selected) Date
    transition(name="fade" appear mode="out-in")
      component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")
  RouterView

  include ../views/includes/toast


</template>

<style scoped></style>
