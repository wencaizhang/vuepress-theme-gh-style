<template>
  <a :href="url" target="_blank"><slot /></a>
</template>

<script>
export default {
  name: 'RowLink',
  data () {
    return {
      url: '',
    }
  },
  mounted () {
    const {username, repo, branch} = this.$themeConfig.repo;
    this.url = `https://github.com/${username}/${repo}/commits/${branch}/${this.$page.relativePath}`
  },
}
</script>
