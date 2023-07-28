Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [{
        title: '前端',
        list: [{
          id: '1231232199',
          name: 'html',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example1.png'
        }, {
          id: '7649868',
          name: 'css',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example2.png'
        }, {
          id: '7649868',
          name: 'css',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example2.png'
        }]
      },
      {
        title: '后端',
        list: [{
          id: '1231232199',
          name: 'java',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example1.png'
        }, {
          id: '7649868',
          name: 'spring',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example2.png'
        }, {
          id: '7649868',
          name: 'redis',
          icon: 'https://tdesign.gtimg.com/miniprogram/images/example2.png'
        }]
      }

    ],
  },
  gridClick: function (e) {
    console.log(e.target.id);
    wx.navigateTo({
      url: '/pages/question-bank/question-bank',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.ajax({
      url:'/getinterviewtype',
      type:'GET',
      data:{
        test:1
      }
    }).then((res)=>{
      
      this.setData({
        typeList:res.data.data
      })      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().init();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})