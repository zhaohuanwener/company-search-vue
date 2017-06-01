import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/Index';
import Detail from '@/components/Detail';
import SearchResult from '@/components/SearchResult';
import LawsuitContent from '@/components/LawsuitContent';
import BidContent from '@/components/BidContent';
import detailChildRoute from './detailChildren';

Vue.use(Router);

// BaseInfo
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail,
      children: detailChildRoute,
    }, {
      path: '/search_result/:name',
      name: 'search_result',
      component: SearchResult,
    }, {
      path: '/lawsuit_content/:uuid',
      name: 'lawsuit_content',
      component: LawsuitContent,
    }, {
      path: '/bid_content/:uuid',
      name: 'bid_content',
      component: BidContent,
    },
  ],
});
