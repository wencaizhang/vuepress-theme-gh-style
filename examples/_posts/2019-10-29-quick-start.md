---
title: 快速开始
date: "2019-10-29"
tags: 
  - vue
  - vuepress
  - blog
categories: 
  - blog
---

基于 vuepress 的博客主题 vuepress-theme-gh-style 使用指南。

::: tip 写在前面的话

如果你在使用这个主题时遇到问题，或者有什么好主意，可以在 <GitHubLink repo="wencaizhang/vuepress-theme-gh-style" /> [GitHub 仓库](https://github.com/wencaizhang/vuepress-theme-gh-style) 发表 Issue 或者 PR。

如果觉得这个主题还不错的话，给一个 Star 支持一下吧 😉
:::

## Step 1: 创建 vuepress 项目

新建一个项目 `my-blog` :

```bash
mkdir my-blog && cd my-blog
```


将 `vuepress` 和 `vuepress-theme-gh-style` 安装为本地依赖：

```bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress vuepress-theme-gh-style
# 或者：npm install -D vuepress vuepress-theme-gh-style

# 新建一个 docs 文件夹
mkdir docs
```


<details>

<summary>点击展开配置示例</summary>

```js
// .vuepress/config.js
module.exports = {
  // 网站 Title
  title: 'My Blog',

  // 网站描述
  description: 'This is my blog',

  // 使用的主题
  theme: 'gh-style',

  themeConfig: {
    author: 'wencaizhang',
    repo: {
      username: 'wencaizhang',
      repo: 'vuepress-theme-gh-style',
      branch: 'master/examples',
    },

    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 添加自定义 footer (支持 HTML)
      custom: '',
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 分页配置 (可选)
    pagination: {
      perPage: 5,
    },

    // 顶部导航栏内容
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
    ],

    // // 评论配置，参考下方 [页面评论] 章节
    // comments: {
    //   owner: 'meteorlxy',
    //   repo: 'vuepress-theme-meteorlxy',
    //   clientId: 'MY_CLIENT_ID',
    //   clientSecret: 'MY_CLIENT_SECRET',
    // },

    // 个人信息（没有或不想设置的，注释或删掉或设为空对应字段即可）
    profile: {
      // 头像
      avatar: 'https://cdn.jsdelivr.net/gh/wencaizhang/static@master/avatar.png',

      // 所在地
      location: 'Beijing',

      // 公司
      company: 'Urplus',

      // 邮箱
      email: '1052642137@qq.com',

      // 网址
      site: 'https://github.com/wencaizhang',

      // GitHub 地址
      github: 'https://github.com/wencaizhang',

      // 简介
      bio: 'JavaScript是世界上第一好的语言😏',

      // 社交平台帐号信息
      social: {
        // Github 帐号和链接
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
    }
  },

}
```

</details>


接着，在 package.json 里加一些脚本:

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

然后就可以开始写作了:

```bash
yarn docs:dev # 或者：npm run docs:dev
```

要生成静态的 HTML 文件，运行：

```bash
yarn docs:build # 或者：npm run docs:build
```

## Step 2: 添加主题

安装博客主题 `vuepress-theme-gh-style`:

```bash
yarn add -D vuepress-theme-gh-style
# 或者：npm install -D vuepress-theme-gh-style
```


## Step 3: 创建文章，开始写作

在 `docs` 目录下创建 `_posts` 目录，用于放置所有的文章源文件（md文件）

```bash
cd docs && mkdir _posts
```

创建文章

```bash
touch _posts/my-first-post.md
```

接下来，你可以使用任意的编辑器来开始你的第一篇文章（我使用 VsCode）。

哦差点忘记，在每一篇文章的开头，你都应该写上对应都 Front Matter，用于提供本篇文章的一些信息。

```
---
title: my-first-post
lang: en-US
date: 2019-11-04 18:25:00
tag:
  - tag1
  - tag2
categories: 
  - blog
---
```

[Front Matter](https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html)

## Step 4: 构建静态网站


要生成静态的 HTML 文件，运行：

```bash
yarn docs:build # 或者：npm run docs:build
```

默认情况下，文件将会被生成在 `.vuepress/dist`，当然，你也可以通过 `.vuepress/config.js` 中的 `dest` 字段来修改，生成的文件可以部署到任意的静态文件服务器上。


VuePress 文档中已经详细介绍了各种部署方案，不再赘述，请参考[部署](https://v1.vuepress.vuejs.org/zh/guide/deploy.html) 。


## Step 5: 个性化-配置主题

创建文件：`docs/.vuepress/config.js`，这是配置文件的入口文件。

```bash
touch docs/.vuepress/config.js
```

此时项目结构大致为：

```bash
my-blog
├── docs # blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── config.js # Vuepress 配置文件
│   └── _posts # 博客文件夹
│       ├── my-first-post.md
│       ...
└── package.json
```

### 导航栏链接

导航以对象数组形式进行配置，对象主要有 `text` 和 `link` 两个属性，分别对应页面导航的文本和链接地址。

如果是外部链接请将 `external` 属性设置为 `true`，否则将按照内部链接处理。

外部链接 `<a>` 标签的特性将默认包含 `target="_blank" rel="noopener noreferrer"`，你可以提供 `target` 与 `rel`，它们将被作为特性被增加到 `<a>` 标签上：

ps: *由于是 GitHub 风格主题，因此导航栏暂不支持下拉列表*。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/' },
      { text: 'Tags', link: '/tag/' },
      { text: '百度', link: 'www.baidu.com', external: true },
    ],
  }
}
```

### 最后更新时间

你可以通过 `themeConfig.lastUpdated` 选项来获取每个文件最后一次 `git` 提交的 `UNIX` 时间戳(`ms`)，同时它将以合适的日期格式显示在每一页的底部：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // string | boolean
    lastUpdated: true, // 开启显示，默认前缀是 `Last Updated`
    // or
    lastUpdated: false, // 关闭显示
    // or
    lastUpdated: 'Last Updated', // 也可以直接给定字符串，此时自动开启显示
    // or
    lastUpdated: '上次更新时间',
  }
}
```

请注意，`themeConfig.lastUpdated` 默认是关闭的，如果给定一个字符串，它将会作为前缀显示（默认值是：`Last Updated`）。

::: tip 使用须知
由于 `lastUpdated` 是基于 `git` 的, 所以你只能在一个基于 `git` 的项目中启用它。此外，由于使用的时间戳来自 `git commit`，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新。

另外还可以指定时间格式，参见 [@vuepress/plugin-last-updated](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html)
:::

### 个人信息展示


```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 个人信息（没有或不想设置的，注释或删掉或设为空对应字段即可）
    profile: {
      // 头像
      avatar: 'https://cdn.jsdelivr.net/gh/wencaizhang/static@master/avatar.png',

      // 所在地
      location: 'Beijing',

      // 公司
      company: 'Urplus',

      // 邮箱
      email: '1052642137@qq.com',

      // 网址
      site: 'https://github.com/wencaizhang',

      // GitHub 地址
      github: 'https://github.com/wencaizhang',

      // 简介
      bio: 'JavaScript是世界上第一好的语言😏',

      // 社交平台帐号信息
      social: {
        // ....
      }
    }
  }
}
```


### 社交账号展示

这里以 GitHub 和新浪微博为例，每个社交平台应当有 `account` 和 `link` 两个值，分别对应昵称和个人主页链接。

除此之外，还支持更多平台：`Facebook`, `LinkedIn`, `Twitter`, `知乎`, `豆瓣`, `Reddit`, `Medium`, `Instagram`, `GitLab`, `Bitbucket`, `Docker`, `CSDN`, `掘金` 等等。

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 个人信息（没有或不想设置的，注释或删掉或设为空对应字段即可）
    profile: {
      // 社交平台帐号信息
      social: {
        // Github 帐号和链接
        github: {
          account: 'wencaizhang',
          link: 'https://github.com/wencaizhang',
        },

        // 新浪微博 帐号和链接
        weibo: {
          account: 'wencai0901',
          link: 'https://weibo.com/u/3013567744',
        },
      }
    }
  }
}
```

### 底部 footer 设置

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 备案号
      beian: '沪ICP备xxx号',
      // 添加自定义 footer (支持 HTML)
      // custom: 'Copyright 2018-present <a href="https://github.com/wencaizhang" target="_blank">wencaizhang</a> | MIT License',
    },
  }
}
```

### 完整配置示例

`src/.vuepress/config.js` 的完整示例如下：

<details>

<summary>点击展开配置示例</summary>

```js
// .vuepress/config.js
module.exports = {
  // 网站 Title
  title: 'My Blog',

  // 网站描述
  description: 'This is my blog',

  // 使用的主题
  theme: 'gh-style',

  themeConfig: {
    author: 'wencaizhang',
    repo: {
      username: 'wencaizhang',
      repo: 'vuepress-theme-gh-style',
      branch: 'master/examples',
    },

    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 添加自定义 footer (支持 HTML)
      custom: 'Copyright 2018-present <a href="https://github.com/wencaizhang" target="_blank">wencaizhang</a> | MIT License',
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    // 分页配置 (可选)
    pagination: {
      perPage: 5,
    },

    // 顶部导航栏内容
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
    ],

    // // 评论配置，参考下方 [页面评论] 章节
    // comments: {
    //   owner: 'meteorlxy',
    //   repo: 'vuepress-theme-meteorlxy',
    //   clientId: 'MY_CLIENT_ID',
    //   clientSecret: 'MY_CLIENT_SECRET',
    // },

    // 个人信息（没有或不想设置的，注释或删掉或设为空对应字段即可）
    profile: {
      // 头像
      avatar: 'https://cdn.jsdelivr.net/gh/wencaizhang/static@master/avatar.png',

      // 所在地
      location: 'Beijing',

      // 公司
      company: 'Urplus',

      // 邮箱
      email: '1052642137@qq.com',

      // 网址
      site: 'https://github.com/wencaizhang',

      // GitHub 地址
      github: 'https://github.com/wencaizhang',

      // 简介
      bio: 'JavaScript是世界上第一好的语言😏',

      // 社交平台帐号信息
      social: {
        // Github 帐号和链接
        github: {
          account: 'wencaizhang',
          link: 'https://github.com/wencaizhang',
        },

        // 新浪微博 帐号和链接
        weibo: {
          account: 'wencai0901',
          link: 'https://weibo.com/u/3013567744',
        },

        // // Facebook 帐号和链接
        // facebook: {
        //   account: 'xxx',
        //   link: 'https://www.facebook.com/xxx',
        // },

        // // LinkedIn 帐号和链接
        // linkedin: {
        //   account: 'xxx',
        //   link: 'http://www.linkedin.com/in/xxx',
        // },

        // // Twitter 帐号和链接
        // twitter: {
        //   account: 'xxx',
        //   link: 'https://twitter.com/xxx',
        // },


        // // 知乎 帐号和链接
        // zhihu: {
        //   account: 'xxx',
        //   link: 'https://www.zhihu.com/people/xxx',
        // },

        // // 豆瓣 帐号和链接
        // douban: {
        //   account: 'xxx',
        //   link: 'https://www.douban.com/people/xxx',
        // },

        // // Reddit 帐号和链接
        // reddit: {
        //   account: 'xxx',
        //   link: 'https://www.reddit.com/user/xxx',
        // },

        // // Medium 帐号和链接
        // medium: {
        //   account: 'xxx',
        //   link: 'https://medium.com/xxx',
        // },

        // // Instagram 帐号和链接
        // instagram: {
        //   account: 'xxx,
        //   link: 'https://www.instagram.com/xxx,
        // },

        // // GitLab 帐号和链接
        // gitlab: {
        //   account: 'xxx',
        //   link: 'https://gitlab.com/xxx',
        // },

        // // Bitbucket 帐号和链接
        // bitbucket: {
        //   account: 'xxx',
        //   link: 'https://bitbucket.org/xxx',
        // },

        // // Docker Hub 帐号和链接
        // docker: {
        //   account: 'xxx',
        //   link: 'https://hub.docker.com/u/xxx',
        // },

        // // CSDN 帐号和链接
        // csdn: {
        //   account: 'xxx',
        //   link: 'https://www.csdn.net/xxx',
        // },

        // // 掘金 帐号和链接
        // juejin: {
        //   account: 'x x x',
        //   link: 'https://juejin.im/user/xxx',
        // },
      },
    }
  },

}
```

</details>
