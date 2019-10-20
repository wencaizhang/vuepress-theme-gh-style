<template>
  <div>
    <div class="d-flex flex-justify-end position-relative">
      <details ref="details" class="details-reset details-overlay mr-2">
        <summary class="btn" aria-haspopup="menu" role="button">
          <i>{{ type }}:</i>
          <span data-menu-button="">
            {{ currKey }}
          </span>
          <span class="dropdown-caret"></span>
        </summary>
        <div class="SelectMenu right-0">
          <div class="SelectMenu-modal">
            <header class="SelectMenu-header">
              <h3 class="SelectMenu-title">Select a {{ type }}</h3>
              <button class="SelectMenu-closeButton" type="button">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  class="octicon octicon-x"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                  />
                </svg>
              </button>
            </header>
            <form class="SelectMenu-filter">
              <input @input="onFilterChange" class="SelectMenu-input form-control" type="text" placeholder="Filter" aria-label="Filter">
            </form>
            <div class="SelectMenu-list">
              <button
                class="SelectMenu-item" role="menuitem"
                v-for="(item, index) in selectList"
                :key="index"
                @click="onClick"
              >
                <router-link :to="item.path" class="width-full pt-2 pb-2 pr-3 pl-3">
                  <span class="category-name mr-1">{{ item.name }}</span>
                  <span class="post-num Counter hide-lg hide-md hide-sm">{{ item.pages.length }}</span>
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator (v) {
        return ['Tag', 'Categories'].includes(v);
      }
    },
    list: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: 'All',
    },
  },
  data () {
    return {
      currKey: 'All',
      selectList: [],
    }
  },
  mounted () {
    this.init();
  },
  watch: {
    value (a, b) {
      this.currKey = a;
    }
  },
  methods: {
    init () {
      this.selectList = this.list;
      this.currKey = this.value || 'All';
    },
    onFilterChange (e) {
      let v = e.target.value;
      this.selectList = v === ''
        ? this.list
        : this.list.filter(item => item.name.includes(v))
    },
    onClick () {
      // 将 open 属性值设置为 false 无效，只能移除 open 属性
      this.$refs.details.removeAttribute('open')
    }
  },
}
</script>

<style>
.SelectMenu-item {
  padding: 0;
}
.SelectMenu-item a {
  text-decoration: none;
}
.SelectMenu-item:hover a {
  color: #fff;
}
.SelectMenu-item:hover .Counter{
  /* color: #f2f2f2; */
  background-color: #ccc;
}
</style>