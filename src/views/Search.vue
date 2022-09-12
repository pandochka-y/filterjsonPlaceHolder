<template>
  <main :class="[isLoading || !posts.length ? 'save-padding':'']">
    <the-header/>
    <search-result/>
  </main>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import SearchResult from "../components/SearchResult.vue";
import {mapActions, mapState} from "pinia";
import {usePosts} from "../store/posts";
import {useAuthor} from "../store/author";

export default {
  name: "Main",
  components: {SearchResult, TheHeader},
  methods: {
    ...mapActions(useAuthor, ['fetchAuthors']),
    ...mapActions(usePosts, ['fetchPosts'])
  },
  computed: {
    ...mapState(usePosts, ['isLoading', 'posts']),
  },

  mounted() {
    this.fetchAuthors();
    this.fetchPosts();
  }
}
</script>

<style scoped>

</style>