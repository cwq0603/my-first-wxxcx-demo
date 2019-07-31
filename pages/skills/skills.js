// pages/skills/skills.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: 'none',
    skills: [
      {
        id: 0,
        title: 'HTML/CSS',
        icon: '',
        content: [
          '熟悉编写语义化的HTML',
          '熟练掌握常见布局方法，能准确还原高保真设计图',
          '熟练掌握 Less/Sass 等 CSS 预处理器'
        ]
      },
      {
        id: 1,
        title: 'Javascript',
        icon: '',
        content: [
          '熟练掌握原生 JavaScript 及代码编写规范',
          '熟悉 JavaScript 的新特性，并应用于项目开发',
          '理解原型、闭包、高阶函数、异步等概念，熟悉 DOM、 BOM、原生 API'
        ]
      },
      {
        id: 2,
        title: 'React',
        icon: '',
        content: [
          '熟练使用 React 框架进行项目开发, 可独立完成PC端、移动端应用开发',
          '熟练使用 React 各生命周期函数，并根据上下文正确使用达到优化目的',
          '熟练使用 React 新特性 Hooks, 知道其实现原理, 并用 Hooks 开发了项目',
          '熟练使用 Redux 状态管理工具进行状态管理'
        ]
      },
      {
        id: 3,
        title: '前端工程化',
        icon: '',
        content: [
          '熟练掌握基本的 Web 性能优化, 具备基本的 Web 安全知识 ( SQL 注入 / XSS / CSRF 等)',
          '熟悉 npm 和 node.js 的模块管理',
          '熟悉常用的 UI 库: 如 Antd, Bootstrap, Antd-mobile',
          '了解 Webpack, Babel 常用配置, 并用其搭建了小项目的开发环境'
        ]
      },
      {
        id: 4,
        title: '其他',
        icon: '',
        content: [
          '熟练使用 TypeScript 进行类型管理，准确定位报错位置',
          '熟练使用 git 进行协作和代码的版本控制',
          '熟悉 HTTP 协议的常见知识，以及计算机网络的基本原理',
          '熟悉常用的数据结构及算法, leetcode 刷过 180 道题',
          '熟悉 Linux 下常用指令的使用、开发环境、项目部署',
          '熟悉微信小程序编写',
          '了解 MySQL, sqlite3, MongoDB 数据库',
          '阅读英文文档流畅'
        ]
      },
    ]
  },

  show: function(e) {
    const id = e.target.dataset.id
    switch(id) {
      case 0:
        this.setData({
          isShow: this.data.isShow === 'none' ? 'block' : 'none'
        })
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