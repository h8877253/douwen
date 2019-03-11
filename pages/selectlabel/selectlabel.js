var httpimg = [];
const util = require('../../utils/util.js')
const url = require('../../utils/url.js')
Page({
  data: {
    GetFavLabelSign: null,
    GetLabelList: null
  },
  onLoad: function(options) {
    console.log(options);
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
    wx.setStorage({
      key: "httpimg",
      data: httpimg
    });
    wx.redirectTo({
      url: '../sendquotes/sendquotes'
    });
  },
  onUnload: function() {
    httpimg = [];
  }
})