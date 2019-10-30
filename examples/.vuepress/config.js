module.exports = {
  title: '70 lines of vuepress blog theme',
  theme: require.resolve('../../'),
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://gitee.com/wencaizhang_admin/images/raw/master/primary/js.jpg'
    }],
    // ['script', {
    //   src: 'https://cdn.jsdelivr.net/npm/prismjs@1.17.1/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
    // }],
  ],
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
