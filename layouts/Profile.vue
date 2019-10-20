<template>
  <div class>
    <div class="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6">
      <img
        class="avatar width-full height-full avatar-before-user-status"
        :src="$themeConfig.avatar"
      />
      <div class="user-status-container position-relative hide-sm hide-md">
        <div
          class="user-status-container-border-busy p-2 rounded-bottom-1 rounded-top-0 border-top-0 lh-condensed"
        >
          <div class="d-inline-block text-gray-dark">code and beer</div>
        </div>
      </div>

      <div
        class="vcard-names-container pt-1 pt-md-3 pb-1 pb-md-3 js-sticky js-user-profile-sticky-fields"
        style="position: static;"
      >
        <h1 class="vcard-names">
          <span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">张阿文</span>
          <span class="p-nickname vcard-username d-block" itemprop="additionalName">wencaizhang</span>
        </h1>
      </div>

      <div class="d-none d-md-block">
        <div class="js-profile-editable-area">
          <div class="p-note user-profile-bio js-user-profile-bio">
            <div>编程一时爽，一直编程一直爽！</div>
            <div>JavaScript是世界上第二好的语言😏</div>
          </div>

          <ul class="vcard-details mb-3">
            <li
              itemprop="worksFor"
              show_title="false"
              aria-label="Organization: Urplus"
              class="vcard-detail pt-1 css-truncate css-truncate-target"
            >
              <svg
                class="octicon octicon-organization"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"
                />
              </svg>
              <span class="p-org">Urplus</span>
            </li>
            <li
              itemprop="homeLocation"
              show_title="false"
              aria-label="Home location: BeiJing"
              class="vcard-detail pt-1 css-truncate css-truncate-target"
            >
              <svg
                class="octicon octicon-location"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                />
              </svg>
              <span class="p-label">BeiJing</span>
            </li>
            <li
              itemprop="email"
              aria-label="Email: 1052642137@qq.com"
              class="vcard-detail pt-1 css-truncate css-truncate-target"
            >
              <svg
                class="octicon octicon-mail"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                />
              </svg>
              <a class="u-email" href="mailto:1052642137@qq.com">1052642137@qq.com</a>
            </li>
            <li
              itemprop="url"
              data-test-selector="profile-website-url"
              class="vcard-detail pt-1 css-truncate css-truncate-target"
            >
              <svg
                class="octicon octicon-link"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                />
              </svg>
              <a
                rel="nofollow me"
                href="https://github.com/wencaizhang"
              >https://github.com/wencaizhang</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-top py-3 clearfix hide-sm hide-md">
        <h2 class="mb-1 h4">Organizations</h2>
      </div>
    </div>
    <div class="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
      <nav class="UnderlineNav">
        <div class="UnderlineNav-body">
          <router-link
            role="tab"
            title="Overview"
            class="UnderlineNav-item"
            :class="{ selected: $route.path === '/' }"
            :to="{ path: '/' }"
          >Overview</router-link>
          <!-- <router-link
            role="tab"
            title="Posts"
            class="UnderlineNav-item"
            :class="{ selected: $route.path.includes('posts') }"
            :to="{ path: '/posts/' }"
          >Posts</router-link> -->
          <router-link
            role="tab"
            title="Categories"
            class="UnderlineNav-item"
            :class="{ selected: $route.path.includes('categories') }"
            :to="{ path: '/categories/' }"
          >Categories</router-link>
          <router-link role="tab" title="Tag"
          class="UnderlineNav-item"
            :class="{ selected: $route.path.includes('tag') }"
          :to="{ path: '/tag/' }">Tag</router-link>
        </div>
      </nav>
      <slot />
    </div>
  </div>
</template>


<script>
import PostItem from "@theme/components/PostItem";
export default {
  components: { PostItem },
  created () {
    console.log(this.$route.query);
  }
};
</script>

<style scoped>
.avatar {
  width: 260px;
  height: 260px;
}
@media (min-width: 768px) {
  .avatar-before-user-status {
    border: 1px solid #e1e4e8;
    border-bottom: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.user-status-container-border-busy {
  background-color: #fffbdd;
  border: 1px solid #ffdf5d;
}
.vcard-fullname {
  font-size: 26px;
  line-height: 30px;
}
.vcard-username {
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
}
.vcard-details .css-truncate.css-truncate-target {
  width: 100%;
  max-width: 100%;
}

.vcard-detail .octicon {
  margin-left: -22px;
}
.vcard-detail .octicon {
  float: left;
  width: 16px;
  margin-top: 3px;
  margin-left: -24px;
  color: #6a737d;
  text-align: center;
}
.vcard-details .css-truncate.css-truncate-target {
  width: 100%;
  max-width: 100%;
}
.css-truncate.css-truncate-target,
.css-truncate .css-truncate-target {
  display: inline-block;
  max-width: 125px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
}
.vcard-detail {
  padding-left: 22px;
}
.vcard-detail {
  padding-left: 24px;
  font-size: 14px;
}
</style>