var utils=require('./utils/request')

// app.js
App({
  pagePath:'',
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

    // wx.switchTab({
    //   url: './pages/card-interview/card-interview',
    // })
    wx.requestUrl = 'http://192.168.0.106:4523/m1/3064387-0-default'
    wx.ajax=utils
  },
  globalData: {
    userInfo: null
  }
})