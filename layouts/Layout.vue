<template>
  <div class="container-lg width-full px-3">
    <ul id="default-layout">
      <li v-for="page in $pagination.pages" :key="page.path"
        class="col-12 d-flex width-full py-4 border-bottom private source"
      >
        <!-- <router-link class="page-link" :to="page.path">{{ page.title }}</router-link> -->
        <PostItem :page="page" />
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import PostItem from "@theme/components/PostItem.vue";
import Pagination from "@theme/components/Pagination.vue";
export default {
  components: { Pagination, PostItem, },
  mounted () {
    console.log(  this.$pagination.pages);
  }
};
</script>