<script>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';
// import Home from '../pages/Home.vue';
// import TheDO from '@/pages/TheDO.vue';

export default {
  components: {
    // Home,
    // TheDO,
  },

  setup() {
    const router = useRouter();
    const routes = router.getRoutes();
    const route = useRoute();

    console.log('route', route);

    return {
      routes,
      route,
    };
  },
};
</script>

<template lang="pug">
  nav.navbar.navbar-inverse#nav
    div.container-fluid
      div.navbar-header
        a.navbar-brand(href="/") Roundupper
      
      div.navbar-center
        slot(name="select")

      //-ul.nav.navbar-nav.navbar-right(v-if="templateName")
      ul.nav.navbar-nav.navbar-right
        li.dropdown
          a.dropdown-toggle(href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false") {{ route.name }} #[span.caret]
          ul.dropdown-menu
            li(v-for="route in routes")
              router-link(:to="route.path")
                | TODO
              //v-link(v-bind:href="route.path") {{ route.name }}
              //a(v-bind:href="route.path") {{ route.name }}

</template>

<style scoped></style>
