import { useRouter } from 'vue-router';

export function useParentRoutes() {
  const router = useRouter();
  const parentRoutes = router
    .getRoutes()
    .filter((r) => r.name !== 'Home' && r.children.length > 0);

  console.log('parentRoutes', parentRoutes);

  return parentRoutes;
}
