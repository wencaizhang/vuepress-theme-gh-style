<template>
  <div class="width-full d-flex">
    <div class="col-10 col-lg-9 d-inline-block">
      <h3>
        <router-link class="page-link ghh-repo-x tooltipstered" :to="page.path">{{ page.title }}</router-link>
      </h3>
      <div>
        <div class="abstract col-9 d-inline-block text-gray mb-2 pr-4" v-html="page.excerpt"></div>
      </div>
      <div class="topics-row-container d-inline-flex flex-wrap flex-items-center f6 my-1">
        <router-link
          class="topic-tag topic-tag-link f6 my-1"
          v-for="tag in page.frontmatter.tags"
          :key="tag"
          :to="{ path: `/tag/${tag}` }"
        >{{ tag }}</router-link>
      </div>
      <div class="f6 text-gray mt-2">
        category:
        <a href="#" class="f6 my-1">{{ page.frontmatter.category }}</a>

        <!-- Updated -->
      </div>
    </div>

    <div class="col-2 col-lg-3 d-flex flex-column flex-justify-around">
      <div class="text-right">
        <router-link
          class="btn"
          :to="{ path: page.path }"
          role="button"
          style="font-weight: 400;"
        >阅读全文</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'page' ],
}
</script>