import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function getChildRoutes(parent) {
  if (!parent.endsWith('/')) {
    parent += '/';
  }
  const route = useRoute();
  const router = useRouter();
  const childRoutes = ref(
    router
      .getRoutes()
      .filter((route) => {
        return route.path.startsWith(parent);
      })
      .map((route) => {
        const { name, path } = route;
        return { name, path };
      })
  );

  return { childRoutes };
}
