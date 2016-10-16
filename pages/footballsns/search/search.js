Page({
  data: {
    latitude: 40.056601,
    longitude: 116.334655,
    speed: 0,
    accuracy: 0,

    networkType: ''
  },
  onLoad: function () {

  },
  onShow: function () {
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi
        that.setData({
          networkType: networkType
        })
      }
    });

    wx.getSystemInfo({
      success: function(res) {
        console.log('手机型号:' + res.model)
        console.log('设备像素比:' + res.pixelRatio)
        console.log('窗口宽度:' + res.windowWidth)
        console.log('窗口高度:' + res.windowHeight)
        console.log('微信设置的语言:' + res.language)
        console.log('微信版本号:' + res.version)
      }
    });
  },
  showInWechatMap: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        // that.setData({
        //   latitude: res.latitude,
        //   longitude: res.longitude,
        //   speed: res.speed,
        //   accuracy: res.accuracy
        // });

        // 使用微信内置地图查看位置
        wx.openLocation({
          latitude: that.data.latitude,
          longitude: that.data.longitude,
          scale: 28
        });
      },
      fail: function () {
        console.log('开发工具不支持~');
      }
    })
  }
});
