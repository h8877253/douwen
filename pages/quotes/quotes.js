const util = require('../../utils/util.js')
const url = require('../../utils/url.js')
Page({
  data: {
    note: [{
        id: 0,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/1.png',
        islike: false
      },
      {
        id: 1,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/2.png',
        islike: false
      },
      {
        id: 2,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/3.png',
        islike: false
      },
      {
        id: 3,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/4.png',
        islike: false
      },
      {
        id: 4,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/5.png',
        islike: false
      },
      {
        id: 5,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/3.png',
        islike: false
      },
      {
        id: 6,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/2.png',
        islike: false
      },
      {
        id: 7,
        name: '大脸猫爱吃鱼',
        time: '2018/7/7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: '../../images/other/5.png',
        islike: false
      }
    ],
    page: 1
  },
  quotesDetails: function() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  onLoad: function (options) {
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       note: that.data.note
    //     })
    //   }
    // });

    // var noteed = wx.getStorageSync(note);
    // if (noteed){
    //   that.setData({
    //     note: noteed
    //   });
    // }else{
    //   // 请求
    // }
  },
onCollectionTap: function(e) {
  var that = this;
  let note = that.data.note;
  let id = e.currentTarget.id;
  console.log(id);
  console.log(note[id].islike);
  if (note[id].islike) {
    // wx.setStorageSync(`note[${id}]`, false);
    wx.showToast({
      title: '取消收藏',
      icon: "none",
    })
  } else {
    // wx.setStorageSync(`note[${id}]`, true);
    wx.showToast({
      title: '收藏成功',
      icon: "none",
    })
  }
  note[id].islike = !note[id].islike;
  this.setData({
    note
  });
},
targetSend: function() {
  wx.removeStorage({ key: 'httpimg'});
  wx.removeStorage({ key: 'sendimgsrc' });
  wx.removeStorage({ key: 'saveInputVaule' });
  wx.navigateTo({
    url: '../sendquotes/sendquotes',
  })
},
onReachBottom: function() {
  var that = this;
  // 显示加载图标
  wx.showLoading({
    title: '玩命加载中',
  })
  console.log(this.data.page);
  util.http(url.qoutesList + this.data.page, {}, function(res) {
    // var moment_list = that.data.moment;
    // for (var i = 0; i < res.data.data.length; i++) { moment_list.push(res.data.data[i]); }
    // that.setData({ moment: that.data.moment })
    that.setData({
      page: that.data.page++
    })
    wx.hideLoading();
  })
}


})