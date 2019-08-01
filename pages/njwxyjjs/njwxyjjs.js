// pages/njwxyjjs/njwxyjjs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qzd: 0,
    oneC: 29,
    oneS: 17,
    twoC: 18,
    twoS: 11,
    threeC: 10,
    threeS: 4,
    fourC: 4,
    fiveC: 7,
    sqgz: '6500',
    gjjC: 2,
    qzdArr: [5000],
    gjjArr: [8,9,10,11,12],
    gt: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.5,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
  },

  handleChange: function(e) {
    console.log(e)
    const val = e.detail.value
    const id = e.target.dataset.id
    this.setData({
      [id]: val
    })
  },

  formSubmit: function (e) {
    const salary = +e.detail.value.sqgz
    if (!salary) {
      console.log('填写税前工资')
      wx.showModal({
        title: '提示',
        content: '填写税前工资',
        showCancel: false,
      })
    } else {
      const { qzd } = e.detail.value
      if (qzd > salary) {
        console.log('税前工资低于起征点')
        wx.showModal({
          title: '提示',
          content: '税前工资低于起征点',
          showCancel: false,
        })
      } else {
        const { oneC, oneS, twoC, twoS, threeC, threeS, fourC, fiveC, gjjC } = e.detail.value
        const companySum = (oneC + twoC + threeC + fourC + fiveC + gjjC) * salary / 100
        const singalSum = (oneS + twoS + threeS + gjjC) * salary / 100 + 10
        const sum = companySum + singalSum
        console.log(companySum, singalSum, sum)
        wx.showModal({
          title: '缴纳金额',
          content: '单位五险一金缴纳费用：' + companySum + '元：' + '个人五险一金缴纳费用：' + singalSum + '元；' + '总计' + sum + '元',
          showCancel: false,
        })
      }
    }
  },

  formReset: function () {
    this.setData({
      qzd: 0,
      oneC: 29,
      oneS: 17,
      twoC: 18,
      twoS: 11,
      threeC: 10,
      threeS: 4,
      fourC: 4,
      fiveC: 7,
      sqgz: '',
      gjjC: 2,
    })
    console.log('form发生了reset事件')
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