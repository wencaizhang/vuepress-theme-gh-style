module.exports = (themeConfig, ctx) => {
  const config = {
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              perPagePosts: 2,
            },
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
        ]
      }],
    ],
    define: {
      // 变量可以直接在组件中使用
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination'

      // 页码有两种格式，一种是完整的页码，一种是只有上一页下一页的简单页码

      // ```js
      // {
      //   paginationComponent: 'Pagination', // 'SimplePagination'
        
      // }
      // ```
    }
  }

  return config;
  
}