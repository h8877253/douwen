var app = getApp()
Page({
  data: {
    note: [{
      id: 0,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/1.png',
    },
    {
      id: 1,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/2.png',
    },
    {
      id: 2,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/3.png',
    },
    {
      id: 3,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/4.png',
    },
    {
      id: 4,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/5.png',
    },
    {
      id: 5,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/3.png',
    },
    {
      id: 6,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/2.png',
    },
    {
      id: 7,
      name: '大脸猫爱吃鱼',
      time: '2018/7/7',
      title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
      url: '../../images/other/5.png',
    }
    ]
  },
  quotesDetails: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  onLoad: function () {
    this.onCollectionTap;
  },
  onCollectionTap: function (e) {
    console.log(e);
    let note = this.data.note;
    let id = e.target.id;
    console.log(id);
    console.log(note[id].islike);
    if (note[id].islike) {
      wx.setStorageSync(`colList[${id}]`, false);
      wx.showToast({
        title: '取消收藏',
        icon: "none",
      })
    } else {
      wx.setStorageSync(`colList[${id}]`, true);
      wx.showToast({
        title: '收藏成功',
        icon: "none",
      })
    }
    note[id].islike = !note[id].islike;
    this.setData({ note });
  },
  /**
     * 页面上拉触底事件的处理函数
     */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page++;
    wx.request({
      url: 'https://xxx/?page=' + page,
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数
        var moment_list = that.data.moment;

        for (var i = 0; i < res.data.data.length; i++) {
          moment_list.push(res.data.data[i]);
        }
        // 设置数据
        that.setData({
          moment: that.data.moment
        })
        // 隐藏加载框
        wx.hideLoading();
      }
    })

  }

})