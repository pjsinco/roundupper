import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import TheDO from '../pages/TheDO.vue';
import AffiliateNews from '../pages/AffiliateNews.vue';
import AoaGeneral from '../pages/AoaGeneral.vue';

const navigateToDefault = function (basePath, defaultPath) {
  return (to, _from) => {
    if (to.path === basePath) {
      return {
        name: defaultPath,
      };
    }
  };
};

const thedoRedirect = navigateToDefault('/the-do', 'Date');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/the-do',
      name: 'The DO',
      component: () => import('../pages/TheDO.vue'),
      beforeEnter: navigateToDefault('/the-do', 'Date'),
      children: [
        //        {
        //          path: 'top-story',
        //          name: 'Top story',
        //          component: () => import('../components/the-do/TopStory.vue'),
        //        },
        //        {
        //          path: 'feature',
        //          name: 'Feature',
        //          component: () => import('../components/the-do/Feature.vue'),
        //        },
        {
          path: 'date',
          name: 'Date',
          component: () => import('../components/the-do/Date.vue'),
        },
      ],
    },
    {
      path: '/affiliate-news',
      name: 'Affiliate News',
      component: AffiliateNews,
      beforeEnter: navigateToDefault('/affiliate-news', 'News item'),
      children: [
        {
          path: 'news-item',
          name: 'News item',
          component: () => import('../components/affiliates/NewsItem.vue'),
        },
        {
          path: 'news-item-with-image',
          name: 'News item with image',
          component: () =>
            import('../components/affiliates/NewsItemWithImage.vue'),
        },
        {
          path: 'section-head',
          name: 'Section head',
          component: () => import('../components/affiliates/SectionHead.vue'),
        },
      ],
    },
    {
      path: '/aoa-general',
      name: 'AOA General',
      component: AoaGeneral,
      beforeEnter: navigateToDefault('/aoa-general', 'Text'),
      children: [
        {
          path: 'text',
          name: 'Text',
          component: () => import('../components/aoa-general/Text.vue'),
        },
        {
          path: 'button',
          name: 'Button',
          component: () => import('../components/aoa-general/Button.vue'),
        },
        {
          path: 'header',
          name: 'Header',
          component: () => import('../components/aoa-general/Header.vue'),
        },
        {
          path: 'icon-list',
          name: 'Icon list',
          component: () => import('../components/aoa-general/IconList.vue'),
        },
        {
          path: 'image-block',
          name: 'Image block',
          component: () => import('../components/aoa-general/ImageBlock.vue'),
        },
        {
          path: 'two-up-signature',
          name: 'Two-up signature',
          component: () =>
            import('../components/aoa-general/TwoUpSignature.vue'),
        },
        //{
        //path: 'spacer',
        //name: 'Spacer',
        //component: () => import('../components/aoa-general/Spacer.vue'),
        //},
      ],
    },
  ],
});

export default router;
