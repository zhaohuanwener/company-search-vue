// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import Resource from 'vue-resource';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.use(iView);
Vue.use(Resource);


// router.beforeEach((to, from, next) => {
//   iView.LoadingBar.start();
//   next();
// });
//
// router.afterEach(() => {
//   iView.LoadingBar.finish();
//   window.scrollTo(0, 0);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    eventHub: new Vue(),
  },
});
