Page({
  data: {
    current: 0,
    list: []
  },
  onLoad: function () {
    // 请注意无 AppID 关联下，工具未检查安全域名
    var that = this;
    wx.request({
      url: 'mock/list.json',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(0);
        that.setData({
          list: res.data
        });
      }
    });
  },
  onPullDownRefreash: function () {
    console.log(0);
  },
  changeItem: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  switchSwiper: function (e) {
    this.setData({
      current: e.target.dataset.index
    })
  }
});
