<script>
import { reactive } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { reset, copyHtml, copyText } from '@/composables/useButtonFunctions';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const apMonths = [
      'Jan.',
      'Feb.',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug.',
      'Sept.',
      'Oct.',
      'Nov.',
      'Dec.',
    ];

    const initialState = {
      date: `${apMonths[month]} ${day}, ${year}`,
    };

    const state = reactive({ ...initialState });

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      const text = [
        'Most recent posts: ' + date.value,
        '(https://thedo.osteopathic.org)',
        '',
      ].join('\n');

      return copyText(text);
    }

    return {
      state,
      props,
      reset,
      copy,
      copyTextVersion,
    };
  },
};
</script>

<template lang="pug">
  Workspace
    include ../../views/the-do/forms/date
    include ./../../views/the-do/renders/date


</template>

<style scoped></style>
