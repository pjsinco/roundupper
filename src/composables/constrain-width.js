import { debounce } from 'lodash-es';
import Constants from '@/constants/master-styles';

export function useConstrainWidth() {
  const displayWidth = ref(Constants.base.layout.fullWidth);
  const bleed = ref(false);

  function constrainWidth(newWidth) {
    if (bleed.value) {
      if (newWidth > 600) {
        displayWidth.value = 600;
      }
    } else {
      if (newWidth > 528) {
        displayWidth.value = 528;
      }
    }
  }

  return {
    displayWidth,
  };
}
