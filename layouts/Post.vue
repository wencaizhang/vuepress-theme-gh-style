<template>
  <div class="container-lg width-full px-3">
    <div class="Box mt-3 position-relative">
      <div
        class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center"
      >
        <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">
          <router-link
            v-for="tag in $page.frontmatter.tags"
            :key="tag"
            :to="{path: `/tag/${tag}`}"
            style="margin: 0 5px;"
          >{{ tag }}</router-link>
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
        <article style="background: #fff;" ref="article" class="markdown-body entry-content p-5" itemprop="text">
          <Content />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import RawLink     from "@theme/components/RawLink.vue";
import BlameLink   from "@theme/components/BlameLink.vue";
import HistoryLink from "@theme/components/HistoryLink.vue";
export default {
  components: { RawLink, BlameLink, HistoryLink },
  methods: {
    handleFullScreen() {
      const docElm = document.documentElement
      const requestEvent =
        docElm.requestFullscreen ||
        docElm.mozRequestFullScreen ||
        docElm.webkitRequestFullScreen ||
        docElm.msRequestFullscreen
      // 网页全屏
      // if (requestEvent) requestEvent.bind(docElm)()

      // 文章全屏
      if (requestEvent) this.$refs.article.requestFullscreen()
    },
  }
}
</script>