import { useRoute, useRouter, RouterView } from 'vue-router';

export function handleTemplateSelect(path) {
  const route = useRoute();
  const router = useRouter();

  const handleTemplateSelect = (path) => {
    router.push(path);
  };
}
