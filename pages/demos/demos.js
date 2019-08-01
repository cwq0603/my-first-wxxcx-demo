// pages/demos/demos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '../../images/icons/right.png',
    demos: [
      {
        id: 1,
        url: '+njwxyjjs',
        title: '南京五险一金计算'
      },
      {
        id: 2,
        url: '-qqyybfq',
        title: 'QQ 音乐播放器'
      }
    ]
  },

  handleClick: function(e) {
    const url = e.target.dataset.url
    if (!url.indexOf('+')) {
      const path = url.substring(1)
      wx.navigateTo({
        url: '../' + path + '/' + path
      })
    } else {
      
    }
    
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