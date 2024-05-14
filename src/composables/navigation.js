import { ref } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

export function useNavigation(parent) {
  const route = useRoute();
  const router = useRouter();

  if (!parent.endsWith('/')) {
    parent += '/';
  }

  const childRoutes = ref(
    router
      .getRoutes()
      .filter((route) => {
        return route.path.startsWith(parent);
      })
      .map((route) => {
        let { name, path, meta } = route;
        if (meta.nickname !== undefined) {
          name = meta.nickname;
        }

        return { name, path };
      })
  );

  let activePath = ref(route.fullPath);

  const handleTemplateSelect = (path) => {
    activePath.value = path;
    router.push(path);
  };

  return {
    childRoutes,
    activePath,
    handleTemplateSelect,
  };
}
