Page({
  data: {
    persent: 0,
    isHide: false,
    poster: '/media/xuwei.webp',
    name: '此时此刻',
    author: '许巍',
    src: '/media/now.mp3',

    imgUrl: ['http://placehold.it/36x36']
  },
  onLoad: function () {
    var that = this;
    var timer = setInterval(function () {
      this.setData({
        persent: ++this.data.persent
      });
      if(this.data.persent === 100) {
        this.setData({
          isShow: true,
          action: {
            method: 'pause'
          }
        });
        clearInterval(timer);
      }
    }.bind(this), 10);
  },
  onShow: function () {

  },

  // 注：开发工具貌似不能录音
  startRecord: function () {
    wx.startRecord({
      success: function(res) {
        var tempFilePath = res.tempFilePath
        console.log(0);
      },
      fail: function(res) {
         //录音失败
      }
    })
  },
  stopRecord: function () {
    console.log('stop');
  },

  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          imgUrl: res.tempFilePaths
        })
      }
    })
  },
  uploadFile: function () {
    // 上传文件
    wx.uploadFile({
      url: 'http://felixlu.bceapp.com/upload.php',
      filePath: this.data.imgUrl[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      success: function (res) {
        console.log("服务器返回信息：" + res.data);
      }
    })
  },
  downloadFile: function () {
    // 下载文件
    var that = this;
    wx.downloadFile({
      url: 'http://felixlu.bceapp.com/files/img4.jpg',
      type: 'audio',
      success: function(res) {
        // 保存文件到本地
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success: function(res) {
            var savedFilePath = res.savedFilePath;
            console.log('本地文件路径：' + savedFilePath);
            that.setData({
              'imgUrl[0]': res.savedFilePath
            })
          }
        })
      }
    })
  }
});
