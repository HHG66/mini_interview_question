// toast/index.js

import Message from 'tdesign-miniprogram/message/index';

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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showTextMessage() {
      Message.info({
        context: this,
        offset: [20, 32],
        duration: 5000,
        icon: false,
        content: '这是一条纯文字的消息通知 5s消失',
      });
    }
  }
})
