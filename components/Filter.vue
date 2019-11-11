<template>
  <div class="width-full">
    <div class="d-flex border-bottom border-gray-dark py-3">
      <div class="mb-3 mb-md-0 mr-md-3 flex-auto">
        <input
          type="search"
          id="your-repos-filter"
          name="q"
          class="form-control width-full js-autosearch-field"
          placeholder="Find a something…"
          autocomplete="off"
          aria-label="Find a something…"
          value
        />
      </div>
      <SelectMenu
        type="Categories"
        :list="$categories.list"
        :value="$currentCategories && $currentCategories.key"
      />
      <SelectMenu type="Tag" :list="$tag.list" :value="$currentTag && $currentTag.key" />
    </div>
    <div v-show="clearBtnVisible" class="TableObject border-bottom border-gray-light py-3">
      <div
        class=" user-repo-search-results-summary TableObject-item TableObject-item--primary v-align-top"
      >
        <strong>{{ filterResultCount }}</strong>
        results
        for
        articles
        written in
        <strong>{{ filterKey }}</strong>
      </div>
      <div class="pr-2 TableObject-item text-right v-align-top">
        <router-link
          class=" text-normal d-inline-block ml-3"
          :to="{path: path}"
        >
          <svg
            class="octicon octicon-x issues-reset-query-icon mt-1"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
            />
          </svg>
          Clear filter
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SelectMenu from "@theme/components/SelectMenu";
export default {
  components: { SelectMenu },
  computed: {
    filterType () {
      if (this.$currentCategories) {
        return 'currentCategories'
      }
      if (this.$currentTag) {
        return 'currentTag'
      }
      return '';
    },
    filterResultCount () {
      return this.filterType && this[`$${this.filterType}`].pages.length
    },
    filterKey () {
      return this.filterType && this[`$${this.filterType}`].key
    },
    clearBtnVisible () {
      return !!this.filterType;
    },
    path () {
      const map = {
        currentCategories: '/categories/',
        currentTag: '/tag/',
      }
      return map[this.filterType]
    },
  },
  mounted() {
    // console.log(this);
    // console.log(this.$currentTag && this.$currentTag.key);
    // console.log(this.$currentCategories && this.$currentCategories.key);
  },
  methods: {

  }
};
</script>