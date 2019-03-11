//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    logged: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mycenterlist: [
      {
        id: 0,
        imgurl: '../../images/icon/wodedouwen.png',
        mycentertitle: "我的抖文",
        url: "../quotes/quotes",
      },
      {
        id: 1,
        imgurl: '../../images/icon/wodeshoucang.png',
        mycentertitle: "我的收藏",
        url: "../mycollect/mycollect"
      },
      {
        id: 2,
        imgurl: '../../images/icon/xingqubiaoqian.png',
        mycentertitle: "兴趣标签",
        url: "../gotag/gotag"
      },
      {
        id: 3,
        imgurl: '../../images/icon/wodepaiming.png',
        mycentertitle: "我的排名",
        url: "../myranking/myranking"
        
      },
      {
        id: 4,
        imgurl: '../../images/icon/qiandao.png',
        mycentertitle: "签到",
        url: "../calendar/calendar",
      }
    ],
  },

  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        logged: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          logged: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            logged: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      logged: true
    })
  },
  mycenterTarget:function(e){
    console.log(e);
    let index = e.currentTarget.dataset.id
    console.log(index);
    let that = this.data.mycenterlist
    console.log(that[index].url);
    wx.navigateTo({
      url: that[index].url, 
    })
  }
})