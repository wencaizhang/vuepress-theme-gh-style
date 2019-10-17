<template>
  <nav aria-label="Pagination" class="paginate-container">
    <component v-if="pageType === 'Pagination' && $pagination.length > 1 && paginationComponent" :is="paginationComponent" />

    <nav v-else class="paginate-container" aria-label="Pagination">
      <div class="pagination">
        <router-link
          v-if="$pagination.hasPrev"
          :to="$pagination.prevLink"
          class="next_page"
          rel="next"
          href="#url"
          aria-label="Next Page"
        >Prev</router-link>
        <span v-else class="previous_page disabled">Previous</span>
        <router-link
          v-if="$pagination.hasNext"
          :to="$pagination.nextLink"
          class="next_page"
          rel="next"
          href="#url"
          aria-label="Next Page"
        >Next</router-link>
        <span v-else class="next_page disabled">Next</span>
      </div>
    </nav>
  </nav>
</template>

<script>
import {
  Pagination,
  SimplePagination
} from "@vuepress/plugin-blog/lib/client/components";
export default {
  data() {
    return {
      paginationComponent: null
    };
  },

  created() {
    this.paginationComponent = this.getPaginationComponent();
  },

  computed: {
    pages() {
      return this.$pagination.pages;
    },
    pageType () {
      console.log(THEME_BLOG_PAGINATION_COMPONENT);
      return THEME_BLOG_PAGINATION_COMPONENT
      // return 'Pagination'
      // return 'SimplePagination'
    }
  },

  methods: {
    getPaginationComponent() {
      const n = this.pageType;
      if (n === "Pagination") {
        return Pagination;
      }

      if (n === "SimplePagination") {
        return SimplePagination;
      }

      return Vue.component(n) || Pagination;
    }
  }
};
</script>
<style lang="scss">
$bg-blue: #0366d6;

.pagination > li {
  &.disabled > a {
    color: #ddd;
  }
  &.active > a {
    z-index: 3!important;
    background-color: $bg-blue!important;
    border-color: $bg-blue!important;
    &:hover {
      z-index: 3!important;
      background-color: $bg-blue!important;
      border-color: $bg-blue!important;
    }
  }

  a {
    border-radius: 0!important;
    margin-left: -1px!important;
    color: 	$bg-blue;

    &:hover {
      z-index: 2;
      color: 	#0366d6;
      background-color: #eff3f6;
      border-color: #e1e4e8;
    }
  }
}

.simple-pagination a {
  margin: 0 0 0 -2px;
  border-radius: 0;
}

</style>