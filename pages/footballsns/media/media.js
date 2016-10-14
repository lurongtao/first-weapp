Page({
  data: {
    persent: 0,
    isHide: false,
    poster: '/media/xuwei.webp',
    name: '此时此刻',
    author: '许巍',
    src: '/media/now.mp3'
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
    }.bind(this), 30);
  },
  onShow: function () {

  }
});
