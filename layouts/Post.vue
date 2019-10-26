<template>
  <div class="width-full">
    <div
      class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4"
    >
      <div class="repohead-details-container container">
        <h1 class="public">
          <span class="author">
            <router-link class="url fn" rel="author" :to="{ path: '/' }">{{ $site.title }}</router-link>
          </span>
          <!-- <span class="path-divider">/</span>
          <strong>{{ $page.title }}</strong>-->
        </h1>
        <ul class="pagehead-actions list-style-none">
          <li>
            <router-link class="btn btn-sm btn-with-count" :to="{ path: '/' }">Posts</router-link>
            <router-link class="social-count" :to="{ path: '/' }">{{ postLength }}</router-link>
          </li>
          <li>
            <router-link class="btn btn-sm btn-with-count" :to="{ path: '/categories/' }">Categories</router-link>
            <router-link
              class="social-count"
              :to="{ path: '/categories/' }"
            >{{ $categories.length }}</router-link>
          </li>
          <li>
            <router-link class="btn btn-sm btn-with-count" :to="{ path: '/tag/' }">Tags</router-link>
            <router-link class="social-count" :to="{ path: '/tag/' }">{{ $tag.length }}</router-link>
          </li>
        </ul>
      </div>

      <div class="container-lg px-3">
        <nav class="reponav clearfix" role="navigation">
          <a class="reponav-item selected" href="javascript:;">
            <!-- <%= octicon("code") %> -->
            <svg
              class="octicon octicon-code"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"
              />
            </svg>
            <span>Article</span>
          </a>
          <a class="reponav-item" href="#comments">
            <!-- <%= octicon("issue-opened") %> -->
            <svg
              class="octicon octicon-issue-opened"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              />
            </svg>
            <span>Comments</span>
            <!-- <span class="Counter">1</span> -->
          </a>
          <a class="reponav-item" href="#recommend">
            <!-- <%= octicon("issue-opened") %> -->
            <svg
              class="octicon octicon-issue-opened"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              />
            </svg>
            <span>Recommend</span>
            <span class="Counter">{{ recommendCouter }}</span>
          </a>
        </nav>
      </div>
    </div>
    <div class="container-lg px-3 mt-3 position-relative">
      <div class="pb-3">
        <h1>
          <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
          {{ $page.title }}
        </h1>
      </div>
      <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
        <div
          class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center"
        >
          <div>
            <span class="author" rel="author">author: {{ $themeConfig.author }}</span>
          </div>
          <ul class="list-style-none">
            <li class="last-updated" v-if="createdDate">
              <span class="prefix">{{ createdText }}:</span>
              <span class="time">{{ createdDate }}</span>
            </li>
            <li class="last-updated" v-if="lastUpdated">
              <span class="prefix">{{ lastUpdatedText }}:</span>
              <span class="time">{{ lastUpdated }}</span>
            </li>
          </ul>
        </div>
        <div
          class="Box-body d-flex flex-justify-between flex-items-center flex-auto f6 border-bottom-0 flex-wrap"
        >

          <ul class="text-mono list-style-none">
            <li>
              <span class="pr-md-4 f6 text-mono">
                categories:
                <span v-for="(cate, index) in $frontmatter.categories" :key="cate">
                  <span v-if="index !== 0">,</span>
                  <router-link :to="{ path: `/categories/${cate}/` }">{{ cate }}</router-link>
                </span>
              </span>
            </li>
            <li>
              <span class="pr-md-4 f6 text-mono">
                tags({{ $page.frontmatter.tags.length }}):
                <span
                  v-for="(tag, index) in $frontmatter.tags"
                  :key="tag"
                >
                  <span v-if="index !== 0">,</span>
                  <router-link :to="{ path: `/tag/${tag}` }">{{ tag }}</router-link>
                </span>
              </span>
            </li>
          </ul>

          <ul class="text-mono list-style-none">
            <li>
              上一篇：
              <router-link v-if="prevPost" :to="{ path: prevPost.path }">{{ prevPost.title }}</router-link>
              <span v-else class="text-gray-dark">没有了</span>
            </li>
            <li>
              下一篇：
              <router-link v-if="nextPost" :to="{ path: nextPost.path }">{{ nextPost.title }}</router-link>
              <span v-else class="text-gray-dark">没有了</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="Box mt-3">
        <div
          class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center"
        >
          <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

            <!-- 阅读本文大概需要 2.8 分钟 -->
            阅读本文大概需要：{{ $page.readingTime.text }}
          </div>

          <div
            class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between"
          >
            <div class="BtnGroup">
              <RawLink class="btn btn-sm BtnGroup-item">Raw</RawLink>
              <BlameLink class="btn btn-sm BtnGroup-item">Blame</BlameLink>
              <HistoryLink class="btn btn-sm BtnGroup-item">History</HistoryLink>
              <span class="btn btn-sm BtnGroup-item" @click="handleFullScreen">全屏阅读</span>
            </div>
          </div>
        </div>
        <div itemprop="text" class="Box-body">
          <article
            style="background: #fff;"
            ref="article"
            class="markdown-body entry-content p-5"
            itemprop="text"
          >
            <Content />
          </article>
        </div>
      </div>
    </div>


    <Sidebar />
    <!-- TODO -->
    <!-- <div class="container-lg px-3 mt-3 position-relative">

    <a href="#recommend" name="recommend">推荐阅读</a>

    <p v-for="post in recommendList"
      :key="post.path">
      <router-link
      
      :to="{ path: post.path }"
    >{{ post.title }}</router-link>
    </p>
    </div>-->
  </div>
</template>

<script>
import Sidebar     from '@theme/components/Sidebar';
import RawLink     from "@theme/components/RawLink";
import BlameLink   from "@theme/components/BlameLink";
import HistoryLink from "@theme/components/HistoryLink";
export default {
  components: { Sidebar, RawLink, BlameLink, HistoryLink },
  data() {
    return {
      recommendCouter: 0,
      recommendList: []
    };
  },
  computed: {
    createdText() {
      return "created";
    },
    createdDate() {
      console.log(this.$page);
      return this.$frontmatter.date;
    },
    lastUpdated() {
      return this.$page.lastUpdated;
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$themeConfig.lastUpdated === "string") {
        return this.$themeConfig.lastUpdated;
      }
      return "Last Updated";
    },
    postList() {
      return this.$site.pages.filter(item => item.pid === "post");
    },
    currPostIndex() {
      return this.postList.findIndex(item => item.key === this.$page.key);
    },
    prevPost() {
      return this.currPostIndex > 0
        ? this.postList[this.currPostIndex - 1]
        : null;
    },
    nextPost() {
      return this.currPostIndex < this.postList.length - 1
        ? this.postList[this.currPostIndex + 1]
        : null;
    },
    postLength() {
      const arr = this.$categories.list
        .map(item => item.pages)
        .reduce((prev, curr, index, array) => {
          return prev.concat(curr);
        }, [])
        .map(item => item.key);

      const a = [...new Set(arr)];
      return a.length;
    }
  },
  mounted() {
    this.recommendCouter = this.$themeConfig.recommendCouter || 5;
    const cate = this.$frontmatter.category;
    const tags = this.$frontmatter.tags;

    this.recommendList = this.$site.pages
      .filter(post => {
        return cate === post.frontmatter.category;
      })
      .slice(0, 10);
  },
  methods: {
    handleFullScreen() {
      const docElm = document.documentElement;
      const requestEvent =
        docElm.requestFullscreen ||
        docElm.mozRequestFullScreen ||
        docElm.webkitRequestFullScreen ||
        docElm.msRequestFullscreen;
      // 网页全屏
      if (requestEvent) requestEvent.bind(docElm)()

      // 文章全屏，文章全屏存在 bug
      // if (requestEvent) this.$refs.article.requestFullscreen();
    }
  }
};
</script>

<style lang="scss">
.repohead-details-container {
  display: flex;
  justify-content: space-between;
  h1 {
    position: relative;
    max-width: 635px;
    font-size: 18px;
    line-height: 26px;
    color: #586069;
  }
}
.pagehead-actions {
  display: inline-flex;

  li {
    margin: 0 0 0 10px;
  }
}

// ------------------------------
.container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}

.repohead.experiment-repo-nav {
  padding-bottom: 0;
  background-color: #fafbfc;
}

.pagehead {
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e1e4e8;
}
.repohead .repohead-details-container {
  margin-bottom: 20px;
}
.reponav {
  position: relative;
  top: 1px;
  margin-top: -5px;
}
.reponav-item {
  float: left;
  padding: 7px 15px 8px;
  color: #586069;
  white-space: nowrap;
  border: 1px solid transparent;
  border-top: 3px solid transparent;
  border-radius: 3px 3px 0 0;

  &.selected {
    color: #24292e;
    background-color: #fff;
    border-color: #e36209 #e1e4e8 transparent;
  }
  &:focus,
  &:hover {
    color: #24292e;
    text-decoration: none;
  }
  .octicon {
    color: rgba(27, 31, 35, 0.3);
  }
  .Counter {
    color: #444d56;
  }
}
</style>