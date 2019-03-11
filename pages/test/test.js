const util = require('../../utils/util.js')
const url = require('../../utils/url.js')
Page({
  data: {
  },
  onsquares: function () {
    util.http(url.bigUrl, { "Labels": "" }, function (res) {
      console.log(res)
    })
  }
})