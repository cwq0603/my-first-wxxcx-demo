// pages/projects/projects.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projects: [
      {
        header: '个人作品',
        works: [
          {
            projectName: 'Boss 直聘移动端项目',
            isShow: 'block',
            video: '',
            description: [
              {
                title: '项目描述：',
                contents: ['前后端分离的 SPA 项目，采用模块化、组件化、工程化的模式开发，包含用户注册/登录界面、主页及实时聊天等功能']
              },
              {
                title: '项目架构：',
                contents: [
                  '前端: 使用 React 全家桶 + ES6 + Webpack + Antd-mobile 等技术',
                  '后端: 使用 Node + Express + mongoDB + socketIO 等技术'
                ]
              }
            ]
          },
          {
            projectName: 'React 实现的个人博客',
            isShow: 'block',
            video: '../../videos/blog.wmv',
            description: [
              {
                title: '项目描述：',
                contents: ['前后端分离的 SPA 项目, 采用模块化、组件化、工程化的模式开发, 使用 Ant Design 组件库优化。包含用户登陆/注册，用户发贴/评论/点赞/看贴等功能']
              },
              {
                title: '项目架构：',
                contents: [
                  '前端: next.js + Webpack + Antd + ES6 + Less + TypeScript 等',
                  '后端: Node.js + Express + MongoDB 等'
                ]
              }
            ]
          },
          {
            projectName: '小程序：音乐播放器',
            isShow: 'block',
            video: '',
            description: [
              {
                title: '项目描述：',
                contents: [
                  '通过微信小程序仿写 QQ 音乐播放器',
                  'demo 中可以看到效果'
                ]
              }
            ]
          }
        ]
      },
      {
        header: '工作经验',
        works: [
          {
            projectName: '国家电网后台管理系统',
            isShow: 'none',
            infos: [{
              company: '南京国电南思科技股份有限公司',
              time: '2018.06-2019.05',
              job: '前端工程师',
              duties: [
                '1. 负责多地国家电网公司后台管理系统的页面编写及维护工作',
                '2. 配合国网公司后端人员进行数据接口联调工作',
                '3. 为国网公司安装及搭建服务器',
                '4. 负责部分地区国网公司工作人员的培训工作',
                '5. 编写项目或工作文档'
              ]
            }]
          },
          {
            projectName: '苏州轨道交通后台管理系统',
            isShow: 'none',
            infos: [{
              company: '南京恒玉软件科技有限公司',
              time: '2019/06 - 至今',
              job: '前端工程师',
              duties: [
                '1. 负责苏轨项目后台管理系统前端页面的编写工作',
                '2. 配合南轨后端进行接口联调对接工作',
                '5. 编写项目开发文档',
              ]
            }]
          }
        ]
      }
    ]
  }
})