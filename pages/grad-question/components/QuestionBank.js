// pages/card-interview/card-interview.js
const pageView={
  
  /**
   * 页面的初始数据
   */
  data: {
    cardData: [
      {
        id:'12',
        title:'单行标题',
        leftIcon:'service',
      },
      {
        id:'13',
        title:'标题信息',
        leftIcon:'service',
      }
    ]
  },
  
  clickCard(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/interview-detail/interview-detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('---------+++');
    wx.ajax({
      url:'/getinterviewlist',
      type:'GET',
      data:{
        test:'1'
      }
    }).then((res)=>{
      this.setData({
        cardData:res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
}
Page(pageView)