<template>
  <div class="container-xl width-full clearfix px-3 mt-4">
    <Profile>
      <div>
        <FilterVue />
        <ul id="default-layout" class="d-flex py-3">
          <li v-for="tag in $tag.list" :key="tag.name">
            <router-link class="page-link topic-tag topic-tag-link f6 my-1" :to="{ path: tag.path }">{{ tag.name }}</router-link>
          </li>
        </ul>
      </div>
    </Profile>
  </div>
</template>

<script>
import FilterVue from "@theme/components/Filter";
import Profile from "./Profile";


export default {
  components: { FilterVue, Profile },
};
</script>