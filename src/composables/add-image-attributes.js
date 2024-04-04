import { ref, onMounted, onUnmounted } from 'vue';
import Constants from '@/constants/newsletter';

export function useAddImageAttributes() {
  let renderedEl = null;
  let observer = null;
  let errorAddingImageAttr = ref(false);
  const observerConfig = { attributes: true, childList: true, subtree: true };

  function handleImageLoad(evt) {
    console.log('okinsidehandleimageload');
    console.log(
      'evt.currentTarget.naturalWidth',
      evt.currentTarget.naturalWidth
    );
    console.log(
      'evt.currentTarget.displayWidth',
      evt.currentTarget.displayWidth
    );
    evt.currentTarget.displayWidth = evt.currentTarget.naturalWidth;
    evt.target.removeEventListener('load', handleImageLoad);
  }

  onMounted(async () => {
    renderedEl = document.querySelector('#rendered');

    async function getImageWidth(image) {
      return new Promise(
        (resolve, reject) => {
          console.log('okinsidepromise');
          image.onload = (evt) => {
            resolve(evt.currentTarget.naturalWidth);
          };
          image.onerror = reject;
        },
        { once: true }
      );
    }

    observer = new MutationObserver(async (mutations, observer) => {
      mutations.forEach(async (mutation) => {
        mutation.addedNodes.forEach(async (node) => {
          // make sure new node type is one we can look for images inside of
          if (typeof node.getElementsByTagName !== 'function') return;

          const imgs = node.getElementsByTagName('img');

          if (imgs.length) {
            for (let i = 0, len = imgs.length; i < len; i++) {
              let width;

              imgs[i].displayWidth = null;

              if (!imgs[i].complete) {
                try {
                  width = await getImageWidth(imgs[i]);
                } catch (err) {
                  errorAddingImageAttr.value = true;
                  break;
                }
              } else {
                width = imgs[i].naturalWidth;
              }

              console.log(
                "width (should always be a value that isn't 0): ",
                width
              );
              imgs[i].setAttribute(
                'width',
                Math.min(width, Constants.Layout.liveAreaWidth)
              );
            }
          }
        });
      });
    });

    observer.observe(renderedEl, observerConfig);
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return {
    errorAddingImageAttr,
  };
}
