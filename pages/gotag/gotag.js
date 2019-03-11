// pages/gotag/gotag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biaoqian:[
      {
        id: 0,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "情感"
      },
      {
      id:1,
      checked:false,
      image:"../../images/icon/lizi.png",
      imagetext:"情感"
    },
      {
        id: 2,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "旅游"
      },
      {
        id: 3,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "骑车"
      },
      {
        id: 4,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "运动"
      },
      {
        id: 5,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "美食"
      },
      {
        id: 6,
        checked: false,
        image: "../../images/icon/lizi.png",
        imagetext: "恋爱"
      },
       ]
  },
  checkboxChange: function (e) {

    let index = e.currentTarget.dataset.index;

    var up = "biaoqian[" + index + "].checked";
    this.setData({
      [up]: !this.data.biaoqian[index].checked
    })

  },
  biaoqiansub:function(){
    // let biaoqianarr = [];
    // this.data.biaoqian.map(function (value, index) {
    //   console.log(value)
    //   if (value.checked == true){
    //     biaoqianarr.push[value.id]
    //   }else{
    //     return;
    //   };
    // });
    // console.log(biaoqianarr);

    var biaoqianarr = [];
    let temp = this.data.biaoqian.map(function (value, index) {
  
      if (value.checked == true) {
        biaoqianarr.push[value.id]
        return value.id;
      }else{
        return;
      }
    })
    console.log(temp);
    let newtemp = [];
    for (var i = 0; i < temp.length; i++) {
      if (typeof (temp[i]) != 'undefined') {
        newtemp.push(temp[i]);
      }
    }
    console.log(newtemp);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})