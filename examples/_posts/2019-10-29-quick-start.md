---
title: 快速开始
tags: 
  - vue
  - vuepress
  - blog
categories: 
  - vuepress
---

## 开始使用

### 安装

新建一个项目 `my-blog` :

```bash
mkdir my-blog
cd my-blog
```

安装 `vuepress` 和 `vuepress-theme-gh-style` :

```bash
npm init -y
npm install vuepress vuepress-theme-meteorlxy \
--registry=https://registry.npm.taobao.org
```

创建一个目录用于保存配置文件和文章源文件：

```bash
mkdir src
```

项目结构大致为：

```bash
my-blog
├── src # Blog 源文件目录
│   ├── .vuepress # Vuepress 目录
│   │   └── config.js # Vuepress 配置文件
│   └── _posts # 博客文件夹
│       ├── xxx.md
│       ...
└── package.json
```

接着，在 package.json 里加一些脚本:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
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

默认情况下，文件将会被生成在 `.vuepress/dist`，当然，你也可以通过 `.vuepress/config.js` 中的 `dest` 字段来修改，生成的文件可以部署到任意的静态文件服务器上，参考 部署 来了解更多。


## 配置主题

## 导航栏链接



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

## 最后更新时间

```js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```

## 个人信息展示


```js
module.exports = {
  themeConfig: {
    // 个人信息（没有或不想设置的，注释或删掉或设为空对应字段即可）
    profile: {
      // 头像
      avatar: 'https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png',

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


## 社交账号展示

这里以 GitHub 和新浪微博为例，每个社交平台应当有 `account` 和 `link` 两个值，分别对应昵称和个人主页链接。

除此之外，还支持更多平台：`Facebook`, `LinkedIn`, `Twitter`, `知乎`, `豆瓣`, `Reddit`, `Medium`, `Instagram`, `GitLab`, `Bitbucket`, `Docker`, `CSDN`, `掘金` 等等。

```js
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

## 底部 footer 设置

``` js
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

## 完整配置示例

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
      avatar: 'https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png',

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