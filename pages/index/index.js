//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    quotesshareisshow:false
  },
  // 获取用户权限
  getSetting: function () {
    console.log('获取用户权限')
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success(res) {
              that.login()
            },
            error() { }
          })
        } else {
          that.data.logged ? that.getUserInfo() : that.login();
        }
      }
    })
  },
  // 用户登录
  login: function () {
    console.log('用户登录');
    if (this.data.logged) return
    var that = this
    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          that.setData({
            userInfo: result,
            logged: true
          });
          console.log('首次登录，存储用户信息')
          wx.setStorage({
            key: 'userInfo',
            data: that.data.userInfo
          });
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              // util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true,
              });
              console.log('非首次登录，存储用户信息')
              wx.setStorage({
                key: 'userInfo',
                data: that.data.userInfo
              });
            },
            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
    })
  },
  // 获取用户信息
  getUserInfo: function () {
    var that = this;
    console.log('获取用户信息')
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          userInfo: userInfo,
          logged: true
        })
        console.log('请求用户信息，存储用户信息')
        wx.setStorage({
          key: 'userInfo',
          data: that.data.userInfo
        });
        // 存储最后一次点击tab的index
        wx.setStorage({
          key: 'lastIndex',
          data: that.data.isActive
        });
      },
      fail: function (res) {
        that.getSetting();
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  quotesshareshow:function() {
    console.log(1);
    this.setData({
      quotesshareisshow: true
    })
  },
  quotessharehide:function(){
    this.setData({
      quotesshareisshow: false
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
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
      hasUserInfo: true
    })
  },
  editorbtn:function(){
    wx.navigateTo({
      url: '../sendquotes/sendquotes',  //跳转页面的路径，可带参数 ？隔开，不同参数用 & 分隔；相对路径，不需要.wxml后缀
    })

  }
})