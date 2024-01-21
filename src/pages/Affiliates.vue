<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import SelectTemplate from '@/components/SelectTemplate.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

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
  navbar(templateName="Affiliates")
    template(v-slot:select)
      select-template(v-on:template-selected="handleTemplateSelect")
        option(value="/affiliates/news-item") News Item
    transition(name="fade" appear mode="out-in")
      component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")
  RouterView

</template>

<style scoped></style>

