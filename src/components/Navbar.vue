<script>
import { RouterLink, useRoute } from 'vue-router';
import { useParentRoutes } from '@/composables/useParentRoutes';

export default {
  props: ['templateName'],

  setup(props) {
    const route = useRoute();
    const parentOfCurrentRoute = route.matched[0].name;

    // remove current route
    const routes = useParentRoutes().filter((r) => {
      const parentPath = route.matched[0].path;
      return r.path !== route.path && r.path !== parentPath;
    });

    return {
      routes,
      props,
      parentOfCurrentRoute,
    };
  },
};
</script>

<template lang="pug">
  nav.navbar.navbar-inverse#nav
    div.container-fluid
      div.navbar-header
        router-link.navbar-brand(to="/") Roundupper

      
      div.navbar-center
        slot(name="select")

      ul.nav.navbar-nav.navbar-right(v-if="props.templateName")
        li.dropdown
          a.dropdown-toggle(href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false") {{ parentOfCurrentRoute }} #[span.caret]
          ul.dropdown-menu
            li(v-for="route in routes")
              router-link(:to="route.path") {{ route.name }}

</template>

<style scoped></style>
