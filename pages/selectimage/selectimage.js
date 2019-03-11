Page({
  data: {
    selimglist: [{
      imgurl: "../../images/icon/lizi.png",
      value: '1',
    },
    {
      imgurl: "../../images/icon/xinjiandouwen.png",
      value: '2',
    },
    {
      imgurl: "../../images/icon/shouchang-on.png",
      value: '3',
    },
    {
      imgurl: "../../images/icon/shouchang-on.png",
      value: '4',
    },
    {
      imgurl: "../../images/icon/shouchang-on.png",
      value: '5',
    },
    {
      imgurl: "../../images/icon/shouchang-on.png",
      value: '6',
    },
    {
      imgurl: "../../images/icon/shouchang-on.png",
      value: '7',
    }],
  },
  radioChange1(e) {
    const value = e.detail.value
    const selimglist = this.data.selimglist
    const items = selimglist.map(n => {
      return Object.assign({}, n, {
        checked: n.value === value,
      })
    })
    this.setData({
      selimglist: items,
      'form.gender': value,
    })
  },
  selimgsub:function(e){
    let that = this.data.selimglist
    let itemvalue;
    let temp = that.map(function (value, index) {
      if (value.checked == true) {
        itemvalue = value.value;
      }
    });
    console.log(itemvalue);
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