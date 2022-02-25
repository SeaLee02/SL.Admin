import { createRouter, createWebHistory } from "vue-router";
const routes = [
];
const router = createRouter({
  history: createWebHistory(), //createWebHashHistory 地址栏会出现 /#/
  routes: routes,
});
export default router;

// import {
//     createRouter,
//     createWebHistory,
//   } from 'vue-router';

//   import store from '@/store/index'

//   const routes = [
//     {
//       path: '/login',
//       component: () => import('@/views/login.vue'),
//       name: 'login',
//       meta: {
//         title: '登录',
//         NoTabPage: true,
//         requireAuth: true,
//         NoNeedHome: true // 添加该字段，表示不需要home模板
//       }
//     },
//     {
//       path: '/load',
//       component: () => import('@/views/load.vue'),
//       name: 'load',
//       meta: {
//         title: '登录',
//         NoTabPage: true,
//         requireAuth: true,
//         NoNeedHome: true // 添加该字段，表示不需要home模板
//       }
//     },
//     {
//       path: '/404',
//       component: () => import('@/views/404.vue'),
//       name: 'NoPage',
//       meta: {
//         title: 'NoPage',
//         requireAuth: false,
//         NoTabPage: true,
//         NoNeedHome: true // 添加该字段，表示不需要home模板
//       }
//     },
//   ]

//   const router = createRouter({
//     history: createWebHistory(), //createWebHashHistory 地址栏会出现 /#/
//     routes:routes
//   });

//   var storeTemp = store;
//   // 路由加载前
//   router.beforeEach(async (to, from,next) => {
//     console.log(to.path);
//     console.log(from.path);

//     if (!storeTemp.state.token) {
//       storeTemp.commit("saveToken", window.localStorage.Token)
//     }
//     if (!storeTemp.state.tokenExpire) {
//       storeTemp.commit("saveTokenExpire", window.localStorage.TokenExpire)
//     }
//     console.log(to.meta.requireAuth);
//     if (to.meta.requireAuth) {
//       console.log(1);
//       next();
//     } else {
//       console.log(2);
//       setTimeout(() => console.log(22) , 5000)
//       next('/login');
//     }

//   });

//   // 路由加载后
//   router.afterEach(() => {

//       // NextLoading.done();
//   });

//   export default router;
