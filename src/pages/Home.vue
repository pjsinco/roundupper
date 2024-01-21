<script>
import { ref } from 'vue';
import TheDO from '@/pages/TheDO.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    TheDO,
  },

  setup() {
    const router = useRouter();
    const routes = router.getRoutes().filter((r) => r.name !== 'Home');

    console.log('routes', routes);

    const handleSubmit = (evt) => {
      router.push(selectedRoute.value);
    };

    const selectedRoute = ref(routes[0].path);

    return {
      routes,
      handleSubmit,
      selectedRoute,
    };
  },
};
</script>

<template lang="pug">
  div.container-fluid
    div.row
      div.col-md-offset-3.col-md-6.text-center(style="margin-top: 5rem;")
        h1(style="padding-bottom: 2rem; color: #888;") Make email for
    div.row
      div.col-md-offset-3.col-md-6.text-center
        form.form-inline(@submit.prevent="handleSubmit")
          select(v-model="selectedRoute").form-control.input-lg
            option(v-for="route in routes" :selected="route.path == selectedRoute" :value="route.path" :key="route.name") {{ route.name }}

          button(type="submit" style="padding-left: 3rem; padding-right: 3rem; margin-left: 1rem;").btn.btn-primary.btn-lg Go


</template>
