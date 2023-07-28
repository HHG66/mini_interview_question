
// import Message from '../toast/index';

const request = (data) => {
  let requestInfo = {
    200: (res)=>{
      console.log('正常请求');
      return res
    },
    401:(res)=>{
      console.log('重定向');
      return res
    },
    502:(res)=>{
      console.log('502');
      wx.showToast({
        title:"网络错误！",
        icon:"error",
        duration:2000
      })
      return res
    }
  }
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: data.url.search('http') == -1 ? wx.requestUrl + data.url : data.url,
      header: data.header,
      data: data.data,
      method: data.type,
      success: function (res) {
        // console.log(res);
        // app.netWorkData.result = res.data
        // console.log(requestInfo[200]);
        let test= requestInfo[res.statusCode](res)
        resolve(test)
      },
    })
  })
  
  return promise
}
module.exports = request