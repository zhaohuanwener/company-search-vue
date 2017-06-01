const routes = [{
  path: '/info',
  name: 'bj_info',
  component: resolve => require(['#/BaseInfo'], resolve),
}, {
  path: '/staff',
  name: 'bj_staff',
  component: resolve => require(['#/Staff'], resolve),
}, {
  path: '/holder',
  name: 'bj_holder',
  component: resolve => require(['#/Holder'], resolve),
}, {
  path: '/investment',
  name: 'bj_investment',
  component: resolve => require(['#/Investment'], resolve),
}, {
  path: '/changeinfo',
  name: 'bj_changeinfo',
  component: resolve => require(['#/ChangeInfo'], resolve),
}, {
  path: '/companyrongzi',
  name: 'dev_companyrongzi',
  component: resolve => require(['#/Companyrongzi'], resolve),
}, {
  path: '/companyteammember',
  name: 'dev_companyteammember',
  component: resolve => require(['#/Companyteammember'], resolve),
}, {
  path: '/companyproduct',
  name: 'dev_companyproduct',
  component: resolve => require(['#/Companyproduct'], resolve),
}, {
  path: '/jigoutzanli',
  name: 'dev_jigoutzanli',
  component: resolve => require(['#/Jigoutzanli'], resolve),
}, {
  path: '/companyjingpin',
  name: 'dev_companyjingpin',
  component: resolve => require(['#/Companyjingpin'], resolve),
}, {
  path: '/lawsuit',
  name: 'sifa_lawsuit',
  component: resolve => require(['#/Lawsuit'], resolve),
}, {
  path: '/court',
  name: 'sifa_court',
  component: resolve => require(['#/Court'], resolve),
}, {
  path: '/zhixing',
  name: 'sifa_zhixing',
  component: resolve => require(['#/Zhixing'], resolve),
}, {
  path: '/punishment',
  name: 'jyfx_punishment',
  component: resolve => require(['#/Punishment'], resolve),
}, {
  path: '/equity',
  name: 'jyfx_equity',
  component: resolve => require(['#/Equity'], resolve),
}, {
  path: '/bid',
  name: 'jyzk_bid',
  component: resolve => require(['#/Bid'], resolve),
}, {
  path: '/recruit',
  name: 'jyzk_recruit',
  component: resolve => require(['#/Recruit'], resolve),
}];

export default routes;
