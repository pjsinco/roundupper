<script>
import { ref, watch } from 'vue';
import Workspace from '@/components/Workspace.vue';
import { copyHtml, copyText } from '@/composables/useButtonFunctions';
import { find } from 'lodash-es';
import { marked } from 'marked';

export default {
  components: {
    Workspace,
  },

  props: ['currentTemplate'],

  setup(props) {
    const headers = [
      {
        name: 'Affiliate Spotlight',
        short: 'spotlight',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqldn/979203/1704489954eB5YrULw/affiliate_header_spotlight.png',
      },
      {
        name: 'Message From Affiliate Relations',
        short: 'message-from',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcy/979203/1704489954EkPSyrF7/affiliate_header_message_from_affiliate_relations.png',
      },
      {
        name: 'Partner Funding Opportunities',
        short: 'partner-funding',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqldc/979203/1704489954ONE0pgUw/affiliate_header_partner_funding_opportunites.png',
      },
      {
        name: 'Affiliate Resources',
        short: 'resources',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqldg/979203/1704489954VG2E0OLC/affiliate_header_resources.pngk',
      },
      {
        name: 'Affilate Leader Spotlight',
        short: 'leader-spotlight',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqld2/979203/170448995476aRThfg/affiliate_header_leader_spotlight.png',
      },
      {
        name: 'Affiliate Recognition',
        short: 'recognition',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqld8/979203/1704489954VpCGinWs/affiliate_header_recognition.png',
      },
      {
        name: 'AOA Staff Announcment',
        short: 'aoa-staff-announcement',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlck/979203/1704489953MQvr68Cy/affiliate_header_aoa_staff_announcement.jpg',
      },
      {
        name: 'Association Management Tools',
        short: 'association-management-tools',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcv/979203/1704489953v6r8le7b/affiliate_header_association_management_tools.png',
      },
      {
        name: 'AOA Updates',
        short: 'aoa-updates',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcg/979203/1704489953geiOsc2B/affiliate_header_aoa_updates.png',
      },
      {
        name: 'Affiliate Contact',
        short: 'contact',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcr/979203/1704489953zQbAQzJQ/affiliate_header_contact.png',
      },
      {
        name: 'Advocacy',
        short: 'advocacy',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcc/979203/1704489952oSIItfoY/affiliate_header_advocacy.png',
      },
      {
        name: 'AOF Update',
        short: 'aof-update',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqlcn/979203/1704489953TSTbdHKO/affiliate_header_aof_update.png',
      },
      {
        name: 'Soma News',
        short: 'soma-news',
        url: 'https://resources.osteopathic.org/l/979203/2024-01-05/cqldk/979203/1704489954La84P2bW/affiliate_header_soma_news.png',
      },
    ];

    const selected = ref(headers[0].short);
    const altText = ref(headers[0].name);
    const imageUrl = ref(headers[0].url);

    // TODO doing quickly - this can be done much better!
    //const imageUrl = computed(() => {
    //  const header = find(headers, function (h) {
    //    return h.short === selected.value;
    //  });

    //  return header.url;
    //});

    watch(selected, (newSelected) => {
      const header = find(headers, function (h) {
        return h.short === newSelected;
      });

      imageUrl.value = header.url;
      altText.value = header.name;
    });

    const reset = () => {
      selected.value = headers[0].short;
      imageUrl.value = headers[0].url;
      altText.value = headers[0].name;
    };

    function copy() {
      copyHtml();
    }

    function copyTextVersion() {
      copyText();
    }

    return {
      imageUrl,
      altText,
      selected,
      headers,
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
    include ../../views/affiliates/forms/header
    include ../../views/affiliates/renders/header

</template>

<style scoped></style>
