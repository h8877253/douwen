const util = require('../../utils/util.js')

Page({
  data: {
    previewImageArr: null,
    tadytime: util.formatTime2(new Date()),
    sendmaskisshow: true,
    quotesshareisshow: false,
    istextarea:true,
    saveInputVaule:"",
    selLabelData: [],
    isselLabel:true
  },
  onLoad: function(options) {
    var httpimg = wx.getStorageSync('httpimg')
    var sendimgsrc = wx.getStorageSync('sendimgsrc')
    var saveInputVaule = wx.getStorageSync('saveInputVaule')
      this.setData({
        selLabelData: httpimg,
        previewImageArr: null,
        saveInputVaule: saveInputVaule
      })
    if (this.data.selLabelData.length > 0){
      this.setData({
        isselLabel: false
      })
    }
      this.setData({
        previewImageArr: sendimgsrc,
      });
      // wx.getStorage({
      //   key: 'sendimgsrc',
      //   success: function (res) {
      //     console.log(1);
      //     console.log(res.data)
      //   }
      // })

  },

  previewImage(e) {
    this.setData({
      quotesshareisshow: true,
      istextarea:false
    })
  },
  changePreviewBtn(e) {
    var self = this;
    wx.chooseImage({
      count: 8,
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        if (tempFilePaths.length >= 2) {
          wx.showToast({
            title: '只能上传一张拖哦',
            icon: "none",
          })
          return;
        } else {
          self.setData({
            previewImageArr: tempFilePaths,
            quotesshareisshow: false,
            istextarea: true
          });
          wx.setStorage({
            key: "sendimgsrc",
            data: tempFilePaths[0]
          });
        }
      }
    })
  },
  quotessharehide: function() {
    this.setData({
      quotesshareisshow: false,
      istextarea: true
    })
  },
  selectimgTarget: function() {
    wx.navigateTo({
      url: '../selectimage/selectimage', //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })
  },
  changePreview(e) {
    console.log(2);
    var self = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: self.data.previewImageArr
    })
  },
  senddouwen: function() {
    this.setData({
      sendmaskisshow: false,
      istextarea: true
    })
  },
  hidesenddouwen: function() {
    this.setData({
      sendmaskisshow: true
    })
  },
  selectlabelTarget: function() {

    wx.navigateTo({
      url: '../selectlabel/selectlabel',
    });
  },
  SaveInputVaule:function(e){
    wx.setStorage({
      key: "saveInputVaule",
      data: e.detail.value
    });
    this.setData({
      saveInputVaule: e.detail.value
    })
  },
  gongkaiupload:function(){
    let data = this.data;
    console.log(data.selLabelData);
    console.log(data.previewImageArr);
    console.log(data.saveInputVaule);
  },
  onUnload: function() {

  }
})