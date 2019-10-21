<template>
  <div class="container-xl width-full clearfix px-3 mt-4">
    <Profile>
      <FilterVue />
      <ul id="default-layout list-style-none">
        <li
          v-for="page in $pagination.pages"
          :key="page.path"
          class="col-12 d-flex width-full py-4 border-bottom private source"
        >
          <PostItem :page="page" />
        </li>
      </ul>
      <Pagination />
    </Profile>
  </div>
</template>

<script>
import PostItem from "@theme/components/PostItem";
import Pagination from "@theme/components/Pagination";
import FilterVue from "@theme/components/Filter";

import Profile from "./Profile";

export default {
  components: { Pagination, PostItem, FilterVue, Profile },
  mounted() {
    console.log(this);
    console.log(this.$pagination);
    console.log(this.$pagination.pages);
  }
};
</script>