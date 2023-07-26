const app = getApp()
Component({
  data: {
    value: '',
    list: [{
        value: 'pages/index/index',
        label: '首页',
        icon: 'home'
      },
      {
        value: 'pages/question-bank/question-bank',
        label: '卡片题库',
        icon: 'app'
      },
      {
        value: 'pages/personal-question/personal-question',
        label: '个人',
        icon: 'chat'
      },
    ],
  },

  methods: {
    switchTab(e) {
      // console.log(e);
      // this.setData({value:e.detail.value});
      wx.switchTab({
        url: e.detail.value.startsWith('/')
          ? e.detail.value
          : `/${e.detail.value}`,
        success:()=>{
          app.pagePath=e.detail.value
        }
      });
    },
    init() {
      const page = getCurrentPages().pop();
      // console.log(page.route);
      this.setData({ value:page.route });
      return 
    },
  },
  
});