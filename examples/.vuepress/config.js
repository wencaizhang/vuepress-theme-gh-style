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
    avatar: 'https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png',
    author: 'wencaizhang',
    repo: {
      username: 'wencaizhang',
      repo: 'vuepress-theme-gh-style',
      branch: 'master/examples',
    },
  }
}
