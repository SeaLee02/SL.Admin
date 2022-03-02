import { createRouter, createWebHistory } from "vue-router";
import store from '@/store/index';

const routes = [
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    name: "NoPage",
    meta: {
      title: "NoPage",
      requireAuth: false,
      NoTabPage: true,
      NoNeedHome: true, // 添加该字段，表示不需要home模板
    },
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录",
      NoTabPage: true,
      requireAuth: true,
      NoNeedHome: true, // 添加该字段，表示不需要home模板
    },
  },
  {
    path: "/layout",
    component: () => import("@/views/layout/index.vue"),
    name: "layout",
    meta: {
      title: "首页",
      NoTabPage: true,
      requireAuth: true,
      NoNeedHome: false, // 添加该字段，表示不需要home模板
    },
  },
  {
    path: "/",
    component: () => import("@/views/layout/index.vue"),
    redirect: '/layout',
    meta: {
      title: "首页",
      NoTabPage: true,
      requireAuth: true,
      NoNeedHome: true, // 添加该字段，表示不需要home模板
    },
  },
  {
    path: "/user",
    component: () => import("@/views/user/index.vue"),
    name: "user",
    meta: {
      title: "账号",
      NoTabPage: true,
      requireAuth: true,
      NoNeedHome: false, // 添加该字段，表示不需要home模板
    },
  },
];
const router = createRouter({
  history: createWebHistory(), //createWebHashHistory 地址栏会出现 /#/
  routes: routes,
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
  console.log(`执行的页面:${to}`);
  console.log(to);
  console.log(`旧页面:${from}`);
   console.log(store.state);
  if (!store.state.token) {
    store.commit("saveToken", window.localStorage.Token)
  }
  if (!store.state.tokenExpire) {
    store.commit("saveTokenExpire", window.localStorage.TokenExpire)
  }

  if (to.meta.requireAuth) {
    console.log(1);
    next();
  } else {
    console.log(2);
    next('/login');
  }
});

// 路由加载后
router.afterEach(() => {});

export default router;
