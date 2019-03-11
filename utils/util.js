const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join(' / ') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatTime2 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join(' / ')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const remove = val => {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}

var root = 'https://ceshi.hzzcfw.cn/';//你的域名  
function http(url, method, data, cb) {
  wx.request({
    url: root + url,
    data: data,
    method: method,
    header: { 'content-type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      return typeof cb == "function" && cb(false)
    }
  })
}  

module.exports = {
  formatTime: formatTime,
  formatTime2: formatTime2,
  http: http
}
