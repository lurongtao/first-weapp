Page({
  data: {
    modal: {
      modalHidden: false,
      username: '',
      password: '',
    },
    toastHidden: true,
    actionSheet: {
      actionSheetHidden: true,
      actionSheetItems: [
        '催办'
      ]
    }
  },
  onLoad: function () {

  },
  onShow: function () {
    if(wx.getStorageSync('username') && wx.getStorageSync('password')) {
      this.setData({
        'modal.modalHidden': true
      });
    } else {
      this.setData({
        modal: {
          username: '',
          password: ''
        }
      });
      this.setData({
        'modal.modalHidden': false
      });
    }
  },
  signinConfirm: function () {
     wx.setStorageSync('username', this.data.modal.username);
     wx.setStorageSync('password', this.data.modal.password);
     this.setData({
       'modal.modalHidden': true
     });
  },
  saveUsername: function (event) {
    this.setData({
      'modal.username': event.detail.value
    });
  },
  savePassword: function (event) {
    this.setData({
      'modal.password': event.detail.value
    });
  },
  toastChange: function () {
    this.setData({
      toastHidden: true
    })
  },
  showActionsheet: function () {
    this.setData({
      'actionSheet.actionSheetHidden': false
    });
  },
  actionSheetChange: function () {
    this.setData({
      'actionSheet.actionSheetHidden': true
    });
  },
  bindItemTap: function () {
    this.setData({
      toastHidden: false
    });
  }
});
