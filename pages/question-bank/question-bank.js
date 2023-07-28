Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cardData: [{
        id: '12',
        title: '单行标题',
        leftIcon: 'service',
      },
      {
        id: '13',
        title: '标题信息',
        leftIcon: 'service',
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickCard(e) {
      console.log(e);
      wx.navigateTo({
        url: '/pages/interview-detail/interview-detail',
      })
    },
    back(params) {
      console.log(params);
    }
  },

  lifetimes: {
    attached: function (params) {
      wx.ajax({
        url: '/getinterviewlist',
        type: 'GET',
        data: {
          test: '1'
        }
      }).then((res) => {
        this.setData({
          cardData: res.data.data
        })
      })
    }
  }
})