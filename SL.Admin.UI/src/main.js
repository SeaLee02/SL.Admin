import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from '@/App.vue';
import router from '@/router/index';
// 使用状态管理工具
import store from '@/store/index';
import 'element-plus/dist/index.css';

createApp(App).use(router).use(store).use(ElementPlus)
  .mount('#app');
