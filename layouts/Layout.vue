<template>
  <div class="container-lg width-full px-3">
    <ul id="default-layout">
      <li v-for="page in $pagination.pages" :key="page.path">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <Pagination />
  </div>
</template>

<script>
import Pagination from "@theme/components/Pagination.vue";
export default {
  components: { Pagination,  },
};
</script>