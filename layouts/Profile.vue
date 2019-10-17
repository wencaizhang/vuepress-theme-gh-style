<template>
  <div class="container-lg width-full px-3">
    <div class="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6">
      <img
        alt
        width="260"
        height="260"
        class="avatar width-full height-full avatar-before-user-status"
        src="https://avatars1.githubusercontent.com/u/34718241?s=460&amp;v=4"
      />
    </div>
    <div class="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
      <nav class="UnderlineNav">
        <div class="UnderlineNav-body">
          <a href="/" role="tab" title="Item 1" class="UnderlineNav-item selected">Overview</a>
          <a href="/posts/" role="tab" title="Item 2" class="UnderlineNav-item">Posts</a>
          <a href="/categories/" role="tab" title="Item 3" class="UnderlineNav-item">Categories</a>
          <a href="/tags/" role="tab" title="Item 4" class="UnderlineNav-item">Tags</a>
        </div>
      </nav>
    </div>

    <ul id="default-layout">
      <li
        v-for="page in $pagination.pages"
        :key="page.path"
        class="col-12 d-flex width-full py-4 border-bottom private source"
      >
        <PostItem :page="page" />
      </li>
    </ul>
  </div>
</template>


<script>
import PostItem from "@theme/components/PostItem.vue";
export default {
  components: { PostItem, },
};
</script>