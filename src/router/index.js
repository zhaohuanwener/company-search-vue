import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/Index';
import Detail from '@/components/Detail';
import SearchResult from '@/components/SearchResult';
import Baseinfo from '@/components/Baseinfo';


Vue.use(Router);

// BaseInfo
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/search_result/:name',
      name: 'search_result',
      component: SearchResult,
    },
    {
      path: '/baseinfo',
      name: 'baseinfo',
      component: Baseinfo,
    }
  ],
});
