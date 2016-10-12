//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    footballsns: '前往足球圈',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoFootballsns: function () {
    wx.navigateTo({
      url: '../footballsns/app'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
