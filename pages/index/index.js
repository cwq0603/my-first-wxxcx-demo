// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   * img：照片
   * qrCodeImg：微信二维码
   * imgMode：图片模式
   * callCount：统计电话被打次数
   * isShow：切换至添加微信号
   * info：个人信息数据
   */
  data: {
    img: '../../images/mypicture/me.png',
    qrCodeImg: '../../images/mypicture/qrCode.jpeg',
    imgMode: 'widthFix',
    callCount: 0,
    isShow: "none",
    info: [
      {
        id: '姓名',
        icon: '../../images/icons/icon_patriarch.png',
        name: "蒯煜",
      },
      {
        id: '院校',
        icon: '../../images/icons/school.png',
        name: '南通大学-自动化'
      },
      {
        id: '手机号',
        icon: '../../images/icons/icon_mobilephone.png',
        name: '15601480793'
      },
      {
        id: '微信',
        icon: '../../images/icons/icon_wechat.png',
        name: 'mywx_ky'
      },
      {
        id: '邮箱',
        icon: '../../images/icons/icon_dmail.png',
        name: 'ky.kyy@qq.com'
      },
      {
        id: 'github',
        icon: '../../images/icons/github.png',
        name: 'KuaiYu95'
      },
      {
        id: '所在地',
        icon: '../../images/icons/icon_GPS.png',
        name: '南京市玄武区'
      },
      {
        id: '求职岗位',
        icon: '../../images/icons/job.png',
        name: '前端开发工程师'
      }
    ]
  },
  /**
   * 个人信息数据点击效果
   * 手机号：拨打电话
   * 微信：切换至微信二维码界面
   * GitHub：弹窗-复制
   * 其余：点击复制
   */
  callMe: function(e) {
    const id = e.target.dataset.id
    const name = e.target.dataset.name
    switch(id) {
      case '手机号': 
        wx.makePhoneCall({
          phoneNumber: name,
          complete: () => {
            this.setData({
              callCount: this.data.callCount + 1
            })
          }
        })
        return
      case '微信': 
        this.setData({
          isShow: "block"
        }, () => {
          console.log(this.data.isShow)
        })
        return
      case 'github': 
        wx.showModal({
          title: 'Github链接',
          content: 'https://github.com/KuaiYu95',
          confirmText: '复制',
          success: (res) => {
            if (res.confirm) {
              wx.setClipboardData({
                data: 'https://github.com/KuaiYu95',
                success(res) {
                  wx.getClipboardData({
                    success(res) {
                      console.log(res.data)
                    }
                  })
                }
              })
            }
          }
        })
        return
      default: 
        wx.setClipboardData({
          data: name,
          success(res) {
            wx.getClipboardData({
              success(res) {
                console.log(res.data)
              }
            })
          }
        })
        return
    }
  },
  /**
   * 切换至个人信息界面
   */
  back: function() {
    this.setData({
      isShow: "none"
    })
  },
  /**
   * 切换至二维码界面
   */
  to: function () {
    this.setData({
      isShow: "block"
    })
  },
})