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
    profile: {
      avatar: 'https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png',
      location: 'Beijing',
      company: 'Urplus',
      email: '1052642137@qq.com',
      site: 'https://github.com/wencaizhang',
      github: 'https://github.com/wencaizhang',
      bio: 'JavaScript是世界上第一好的语言😏',
      social: {
        github: 'https://github.com/wencaizhang',
        weibo: 'https://weibo.com/u/3013567744',
        zhihu: 'https://www.zhihu.com',
        twitter: '',
      },
    }
  }
}
