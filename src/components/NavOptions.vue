<script>
export default {
  props: ['routes', 'activePath'],

  setup(props) {
    const { routes, activePath } = props;

    return {
      routes,
      activePath,
    };
  },
};
</script>

<template lang="pug">
  option(v-for="route in routes" :value="route.path" :selected="activePath == route.path") {{ route.name }}
</template>

<style scoped></style>
