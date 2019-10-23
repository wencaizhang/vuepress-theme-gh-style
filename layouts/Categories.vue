<template>
  <div class="container-xl width-full clearfix px-3 mt-4">
    <Profile>
      <FilterVue />
      <!-- 分类集合 -->
      <ul class="list-style-none category-wrapper py-3">
        <li class="category-item d-flex py-4 width-full border-bottom" v-for="(item, index) in $categories.list" :key="index">
          <h3>
            <router-link class="page-link f6 my-1" :to="{ path: item.path }">{{ item.name }}</router-link>
            <span class="Counter">{{ item.pages.length }}</span>
          </h3>
        </li>
      </ul>
    </Profile>
  </div>
</template>

<script>
import Profile    from "./Profile";
import FilterVue  from "@theme/components/Filter";
import SelectMenu from "@theme/components/SelectMenu";
export default {
  components: { SelectMenu, FilterVue, Profile }
};
</script>