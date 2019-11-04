module.exports = {
  title: 'vuepress-theme-gh-style',
  theme: require.resolve('../../'),

  head: [
    ['link', {
      rel: 'icon',
      href: 'data:image/png;base64,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'
    }],
  ],
  // head: [
  //   ['link', {
  //     rel: 'icon',
  //     href: 'https://gitee.com/wencaizhang_admin/images/raw/master/primary/js.jpg'
  //   }],
  //   // ['script', {
  //   //   src: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
  //   // }],
  // ],
  themeConfig: {
    author: 'wencaizhang',
    repo: {
      username: 'wencaizhang',
      repo: 'vuepress-theme-gh-style',
      branch: 'master/examples',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/' },
      { text: 'Tags', link: '/tag/' },
    ],
    created: '发布时间',
    lastUpdated: '最后更新时间', // string | boolean
    profile: {
      avatar: 'https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png',
      location: 'Beijing',
      company: 'Urplus',
      email: '1052642137@qq.com',
      site: 'https://github.com/wencaizhang',
      github: 'https://github.com/wencaizhang',
      bio: 'JavaScript是世界上第一好的语言😏',
      social: {
        github: {
          account: 'wencaizhang',
          link: 'https://github.com/wencaizhang',
        },

        // 新浪微博 帐号和链接
        weibo: {
          account: 'wencai0901',
          link: 'https://weibo.com/u/3013567744',
        },
      },
    },
    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      beian: '沪ICP备xxx号',
      // 添加自定义 footer (支持 HTML)
      // custom: 'Copyright 2018-present <a href="https://github.com/wencaizhang" target="_blank">wencaizhang</a> | MIT License',
    },
  }
}
