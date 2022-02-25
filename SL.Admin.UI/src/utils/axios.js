import Axios from 'axios';
import ElMessage from 'element-plus';

import store from '@/store/index';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
  timeout: 20000, // 请求超时 20s
});

// eslint-disable-next-line prefer-const
let storeTemp = store;

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    console.log(storeTemp.state);
    var curTime = new Date()
    var expiretime = new Date(Date.parse(storeTemp.state.tokenExpire))

    if (storeTemp.state.token && (curTime < expiretime && storeTemp.state.tokenExpire)) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      response.headers.Authorization = "Bearer " + storeTemp.state.token;
    }
    //  response.headers.Authorization = "Bearer " + storeTemp.state.token;

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
