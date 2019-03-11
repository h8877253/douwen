var httpimg = [];
const util = require('../../utils/util.js')
const url = require('../../utils/url.js')
Page({
  data: {
    GetFavLabelSign: null,
    GetLabelList: null
  },
  onLoad: function(options) {
    wx.login({
      success: function(res) {
        if (res.code) {
          let data = {
            "js_code": res.code
          }
          console.log(data);
          util.http(url.CheckWeixinUserLogin, 'POST', data, function (data) {
            console.log('登录接口返回结果：' + JSON.stringify(data))
            if (data.openId) {
              wx.setStorageSync('openid', data.openId);
              wx.getUserInfo({
                success: function (res) {
                  var simpleUser = res.userInfo;
                  console.log(simpleUser.nickName);
                }
              });
            }
          })
        }
      }
    })
    let that = this;
    util.http(url.GetFavLabelSign, 'GET', {}, function(data) {
      console.log(data);
      that.setData({
        GetFavLabelSign: data
      })
    })
    util.http(url.GetLabelList, 'GET', {}, function(data) {
      console.log(data);
      that.setData({
        GetLabelList: data
      })
    })
  },
  onSelectdiabloTag: function(e) {
    let GetLabelList = this.data.GetLabelList;
    let eid = e.currentTarget.dataset.id;
    GetLabelList.forEach(item => {
      if (item.id == eid) {
        item.isSelected = !item.isSelected;
        item.isSelected ? httpimg.push({
          id: item.id,
          text: item.labelText
        }) : httpimg.splice(httpimg.indexOf(item.id), 1)
      }
    })
    this.setData({
      GetLabelList
    });
    console.log(httpimg);
    if (httpimg.length >= 3) {
      wx.showToast({
        title: '亲，最多选3个标签哦~！',
        icon: "none",
      });
      GetLabelList.forEach(function(e, i, a) {
        if (e.isSelected == false) {
          e.isEnabled = true;
        }
      });
      this.setData({
        GetLabelList,
      })
    } else {
      GetLabelList.forEach(function(e, i, a) {
        e.isEnabled = false;
      });
      this.setData({
        GetLabelList,
      })
    }
  },
  selectlableTarget: function() {
    if (httpimg.length == 0) {
      wx.showToast({
        title: '亲，您还没有选择标签哦',
        icon: "none",
      });
      return;
    } else {
      console.log(1);
      wx.switchTab({
        url: '../quotes/quotes'
      })
    }
  },
  onUnload: function() {
    httpimg = [];
  }
})