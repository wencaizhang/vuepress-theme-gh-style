<template>
  <div class="container-xl width-full clearfix px-3 mt-4">
    <Profile>
      <FilterVue />
      <!-- 分类集合 -->
      <ul class="category-wrapper d-flex py-3">
        <li class="category-item" v-for="(item, index) in $categories.list" :key="index">
          <!-- <CateCard :item="item" /> -->
          <router-link class="page-link topic-tag topic-tag-link f6 my-1" :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
      </ul>
    </Profile>
  </div>
</template>

<script>
import Profile from "./Profile";
import FilterVue from "@theme/components/Filter";
import SelectMenu from "@theme/components/SelectMenu";
export default {
  components: { SelectMenu, FilterVue, Profile }
};
</script>