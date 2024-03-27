import { useAoaGeneralRenders } from '@/composables/styles-base-aoa-general';

export function useRendererForAoaGeneral() {
  const { paragraph, heading, link, list } = useAoaGeneralRenders();

  const renderer = {
    paragraph,
    heading,
    link,
    list,
  };

  return { renderer };
}
