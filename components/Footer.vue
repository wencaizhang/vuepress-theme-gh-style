<template>
  <div class="footer container-lg width-full px-3" role="contentinfo" style="margin: 0 auto;">
    <div
      class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light"
    >

      <template v-if="$themeConfig.footer.custom">
        <div v-html="$themeConfig.footer.custom"></div>
      </template>
      <template v-else>
      
        <ul class="list-style-none d-flex flex-wrap">
          <li class="mr-3">
            © 2019
            <span title="0.59632s from unicorn-5df5cbdbbd-9fvbv">GitHub</span>, Inc.
          </li>
          <li v-if="$themeConfig.footer.beian" class="mr-3">
            <a href="http://beian.miit.gov.cn" target="_blank" rel="nofollow">{{ $themeConfig.footer.beian }}</a>
          </li>
          <li class="mr-3">
            <router-link :to="$site.base">Home</router-link>
          </li>
        </ul>

        <a
          aria-label="Homepage"
          title="GitHub"
          class="footer-octicon d-none d-lg-block mx-lg-4"
          target="_blank"
          :href="$themeConfig.github"
        >
          <svg
            height="24"
            class="octicon octicon-mark-github"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>

        <div class="list-style-none d-flex flex-wrap footer-copyright">
          <template v-if="$themeConfig.footer.poweredBy">
            <span>Powered by </span>
            <a href="https://v1.vuepress.vuejs.org" target="_blank">VuePress</a>
          </template>
          <template v-if="$themeConfig.footer.poweredBy && $themeConfig.footer.poweredByTheme">
            <span>❤ Theme</span>
            <a href="https://github.com/wencaizhang/vuepress-theme-gh-style" target="_blank">gh-style</a>
          </template>
        </div>
      </template>
    </div>

    <div class="d-flex flex-justify-center pb-6">
      <span class="f6 text-gray-light"></span>
    </div>
  </div>
</template>

<style>
.footer-copyright > * {
  margin: 2px;
}
.footer-octicon {
  color: #c6cbd1;
}
.footer-octicon:hover {
  color: #959da5;
}
</style>