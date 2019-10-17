<template>
  <div id="global-layout">
    <Header />

    <DefaultGlobalLayout style="flex: 1;" />

    <Footer />
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";
export default {
  components: { DefaultGlobalLayout: GlobalLayout, Header, Footer }
};
</script>

<style lang="scss">
@import "@primer/css/index.scss";
li {
  list-style: none;
}
#global-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.topic-tag {
  display: inline-block;
  padding: 0.3em 0.9em;
  margin: 0 0.5em 0.5em 0;
  white-space: nowrap;
  background-color: #f1f8ff;
  border-radius: 3px;
}
.topic-tag-link:hover {
  text-decoration: none;
  background-color: #def;
}
</style>