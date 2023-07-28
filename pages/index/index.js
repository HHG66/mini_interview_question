// index.js
// 获取应用实例
const app = getApp()
import Message from 'tdesign-miniprogram/message/index';

Page({
  data: {
    startPoint: 0, //记录滑动的初始位置
    slipFlag: false, //定义 滑动事件 节流阀, 防止一次滑动触发多次滑动事件
    //面试题详细信息
    questionInfo: {
      id: '',
      title: '',
      details: '',
      tag:['css']
    },
    //用于记录面试题id
    previousQuestionList: []
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.switchNextQuestion()
  },
  onShow() {
    this.getTabBar().init();

  },
  myTouchStart(e) {
    // ---------------------记录滑动事件信息---------------------
    //开启滑动事件
    this.data.slipFlag = true
    //记录触摸点的坐标信息
    this.data.startPoint = e.touches[0]
    //---------------------记录滑动事件信息end---------------------
  },

  myTouchMove(e) {
    // ----------------监听手势左右滑事件----------------
    if (((this.data.startPoint.clientX - e.touches[e.touches.length - 1].clientX) > 80) && this.data.slipFlag) {
      console.log("左滑事件");
      this.data.slipFlag = false
      // this.switchNextQuestion()
      return
    } else if (((this.data.startPoint.clientX - e.touches[e.touches.length - 1].clientX) < -80) && this.data.slipFlag) {
      console.log("右滑事件");
      this.data.slipFlag = false
      return
    }
    // ----------------监听手势左右滑事件end----------------

    if (((this.data.startPoint.clientY - e.touches[e.touches.length - 1].clientY) > 80) && this.data.slipFlag) {
      console.log("上滑事件");
      this.data.slipFlag = false
      this.switchNextQuestion()
      return
    } else if (((this.data.startPoint.clientY - e.touches[e.touches.length - 1].clientY) < -80) && this.data.slipFlag) {
      console.log("下滑事件");
      this.data.slipFlag = false
      this.previousQuestion()
      return
    }


  },
  //下一题
  switchNextQuestion() {
    wx.ajax({
      url: "/getinterviewinfo",
      type: 'GET',
      data:{
      }
    }).then((res) => {
      this.setData({
        questionInfo: res.data.data,
      })
      let previousQuestionId = res.data.data.id
      this.setData({
        previousQuestionList: [...this.data.previousQuestionList, previousQuestionId]
      })
    })
  },
  //上一题
  previousQuestion(){
    // console.log(this.data.previousQuestionList);
    // console.log('上一题',this.data.previousQuestionList[this.data.previousQuestionList.length-2]);
    wx.ajax({
      url: "/getinterviewinfo",
      type: 'GET',
      data:{
        id:this.data.previousQuestionList[this.data.previousQuestionList.length-2]
      }
    }).then((res) => {
    
    })
  },
  questionClick(){
    wx.navigateTo({
      url: '/pages/interview-detail/interview-detail',
    })
  },
  
  showTextMessage(){
  Message.error({
    context: this,
    offset: [20, 32],
    duration: 5000,
    content: '这是一条错误提示通知',
  });
 }
})