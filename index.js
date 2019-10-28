function getRandomAvatar () {
  let n = Math.ceil((Math.random() * 25))
  return `https://gitee.com/wencaizhang_admin/images/raw/master/github-avatar/avatar${n}.webp`
}

module.exports = (themeConfig, ctx) => {
  const config = {
    plugins: [
      ['@vuepress/last-updated'],
      ['vuepress-plugin-smooth-scroll'],
      ['vuepress-plugin-nprogress'],
      ['vuepress-plugin-container', { type: 'tip' }],
      ['vuepress-plugin-container', { type: 'warning' }],
      ['vuepress-plugin-container', { type: 'danger' }],
      ['vuepress-plugin-reading-time', {
        excludes: ['/about', '/tag/.*', '/categories/.*']
      }],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
      [
        'vuepress-plugin-medium-zoom',
        {
          selector: '.markdown-body img',
          delay: 1000,
          options: {
            margin: 24,
            background: 'rgba(0,0,0,0.6)',
            scrollOffset: 0,
          },
        },
      ],
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              perPagePosts: 2,
            },
            itemPermalink: '/:year-:month-:day/:slug',
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Tag' },
            itemlayout: 'Tag',
            pagination: {
              perPagePosts: 3
            }
          },
          {
            id: 'categories',
            keys: ['categories'],
            path: '/categories/',
            layout: 'categories',
            frontmatter: { title: 'categories' },
            layout: 'Categories',
            scopeLayout: 'Category'
          },
        ]
      }],
    ],
    define: {
      // 变量可以直接在组件中使用
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',

      // 页码有两种格式，一种是完整的页码，一种是只有上一页下一页的简单页码

      // ```js
      // {
      //   paginationComponent: 'Pagination', // 'SimplePagination'
        
      // }
      // ```

      AVATAR: themeConfig.profile.avatar || getRandomAvatar()
    }
  }

  return config;
  
}