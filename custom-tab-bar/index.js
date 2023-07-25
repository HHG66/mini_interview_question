Component({
  data: {
    value: 'label_1',
    list: [{
        value: '/pages/index/index',
        label: '首页',
        icon: 'home'
      },
      {
        value: '/pages/card-interview/card-interview',
        label: '卡片题库',
        icon: 'app'
      },
      {
        value: '/pages/personal-question/personal-question',
        label: '个人',
        icon: 'chat'
      },
    ],
  },

  methods: {
    onChange(e) {
     const url=e.detail.value
      wx.switchTab({url})
      this.setData({
        value: e.detail.value,
      });
    },

  },

});