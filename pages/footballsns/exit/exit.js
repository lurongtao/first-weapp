Page({
  data: {
    current: 0
  },
  onLoad: function () {
    wx.clearStorageSync();
    wx.navigateBack();
  }
});
