<script>
import { ref, computed } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const defaultImageUrl =
      'https://resources.osteopathic.org/l/979203/2024-02-08/d3kmr/979203/1707396067as5M6Jke/ph_250sq.png';
    const imageUrl = ref(defaultImageUrl);
    const alignOptions = ref([
      { text: 'Left', value: 'left' },
      { text: 'Center', value: 'center' },
      { text: 'Right', value: 'right' },
    ]);
    const selectedAlign = ref('center');
    const spaceAbove = ref(true);
    const spaceBelow = ref(true);
    const caption = ref('Lorem ipsum dolor');
    const altText = ref('');
    const displayWidth = ref(253);

    const reset = () => {
      imageUrl.value = defaultImageUrl;
      selectedAlign.value = 'center';
      spaceAbove.value = true;
      spaceBelow.value = true;
      caption.value = 'Lorem ipsum dolor';
      displayWidth.value = 253;
    };

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    const spacingStyle = computed(() => {
      return {
        paddingTop: spaceAbove.value ? '24px' : '0',
        paddingRight: '36px',
        paddingBottom: spaceBelow.value ? '24px' : '0',
        paddingLeft: '36px',
        direction: 'ltr',
        fontSize: '0px',
        textAlign: 'center',
      };
    });

    const captionStyle = computed(() => {
      return {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '21px',
        textAlign: selectedAlign.value,
        color: '#666666',
      };
    });

    const displayWidthNumber = computed(() => {
      const regex = /(\d+)/gm;
      console.log('displayWidth.value', displayWidth.value);
      const matches = `${displayWidth.value}`.match(regex);
      if (matches) {
        return matches[0];
      }

      return null;
    });

    return {
      displayWidth,
      displayWidthNumber,

      altText,
      caption,
      spacingStyle,
      captionStyle,
      alignOptions,
      imageUrl,
      selectedAlign,
      spaceAbove,
      spaceBelow,
      reset,
      copy,
      copyTextVersion,
    };
  },
};
</script>

<template lang="pug">

  Workspace
    include ../../views/aoa-general/forms/image-block
    include ../../views/aoa-general/renders/image-block
</template>

<style scoped></style>
