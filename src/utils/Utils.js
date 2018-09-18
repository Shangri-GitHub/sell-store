/**
 * Created by shangri-la on 2018/8/16.
 */

import configs from '../config';
import axios from 'axios';

export default{
  httpInit(){
    // 拦截器
    axios.interceptors.request.use(
      config => {
        config.headers['Content-Type'] = 'application/json; charset=UTF-8',
        config.baseURL = configs.api.BASEURL;
        config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    axios.interceptors.response.use(response => {
        if (response.data.code == 202) {
          console.log("此登录信息已过期，请重新登录")
        }
        return response
      }, error => {
        return Promise.reject(error)
      }
    )
    return axios;
  },
  webSocketInit(){
    var websocket = null;
    if ('WebSocket' in window) {
      websocket = new WebSocket(configs.webSocket.URI);
    } else {
      console.log('该浏览器不支持websocket!');
    }
    return websocket;
  }

}
