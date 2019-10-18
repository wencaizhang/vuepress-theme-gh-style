<template>
  <div class="container-lg width-full px-3 py-3">
    <ul id="default-layout" class="d-flex">
      <li v-for="tag in $tag.list" :key="tag.name">
        <router-link class="page-link topic-tag topic-tag-link f6 my-1" :to="{ path: tag.path }">{{ tag.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
