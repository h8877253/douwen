// var app = getApp()
// Page({
//   data: {
//     ranklist:[
//       {
//         id:1,
//         namehead:"../../images/icon/lizi.png",
//         name:"小明",
//         nametitle:"智者大师",
//         suffer:1000,
//         address:"成都市"
//     },
//       {
//         id: 2,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 3,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 4,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 5,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 6,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 7,
//         nameead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 8,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//       {
//         id: 9,
//         namehead: "../../images/icon/lizi.png",
//         name: "小明",
//         nametitle: "智者大师",
//         suffer: 1000,
//         address: "成都市"
//       },
//     ],
//     currentTab: 0,

//   },

//   onLoad: function (options) {
//     // 页面初始化 options为页面跳转所带来的参数

//   },
//   //滑动切换
//   swiperTab: function (e) {
//     var that = this;
//     that.setData({
//       currentTba: e.detail.current
//     });
//   },
//   //点击切换
//   clickTab: function (e) {

//     var that = this;

//     if (this.data.currentTab === e.target.dataset.current) {
//       return false;
//     } else {
//       that.setData({
//         currentTab: e.target.dataset.current
//       })
//     }
//   }

// })

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranklist: [{
        id: 1,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 2,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 3,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 4,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 5,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 6,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 7,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 8,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 9,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
      {
        id: 10,
        namehead: "../../images/icon/lizi.png",
        name: "小明",
        nametitle: "智者大师",
        suffer: 1000,
        address: "成都市"
      },
    ],
    winWidth: 0,
    winHeight: 0,
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight+100
        });
      }

    });
  },
  bindChange: function(e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current
    });

  },
  swichNav: function(e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})