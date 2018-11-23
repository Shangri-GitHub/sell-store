/**
 * Created by shangri-la on 2018/8/16.
 */
export default{
  webSocket: {
    // URI: "ws:" + process.env.API_ROOT + "/webSocket", //"ws://127.0.0.1:8080/sell/webSocket",
    URI: "ws://127.0.0.1:8080/sell/webSocket",
  },
  api: {
    BASEURL:  process.env.API_ROOT  //"http://127.0.0.1:8080/sell/"
  },
  qiniu:{
    URL:"http://qiniu.hanxing.store/"
  }

}
