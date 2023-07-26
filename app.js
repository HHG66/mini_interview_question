// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    console.log(logs);
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    console.log('进入小程序后执行');

    // wx.navigateTo({
    //   url: './pages/card-interview/card-interview',
    // })

    wx.switchTab({
      url: './pages/card-interview/card-interview',
    })
    wx.ajax = function (data) {
      let promise = new Promise(function (resolve,reject) {
        wx.request({
          url: data.url,
          header:data.header,
          data:data.data,
          method:data.type,
          success:function (res) {
            console.log(res);
            // app.netWorkData.result = res.data
            resolve(res)
          }
       
        })
      })
      return promise
    }
  },
  globalData: {
    userInfo: null
  }
})