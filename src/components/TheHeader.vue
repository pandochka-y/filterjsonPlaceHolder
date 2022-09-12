<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <the-search-bar @searching="searchingAuthor"
                        @updateQuery="setQuery"
        />
      </div>
    </div>
  </header>
</template>

<script>
import {mapActions, mapState} from "pinia";
import {usePosts} from "../store/posts";
import {useAuthor} from "../store/author";
import TheSearchBar from "./TheSearchBar.vue";
import {useQuery} from "../store/query";

export default {
  name: "SearchInput",
  components: {TheSearchBar},
  methods: {
    ...mapActions(useAuthor, ['fetchAuthors']),
    ...mapActions(usePosts, ['emptyPosts', 'fetchPosts']),
    ...mapActions(useQuery, ['setQuery', 'setOldQuery']),

    async searchingAuthor(e) {
      e.preventDefault()
      if (this.oldQuery === this.query) return false
      const paramsPosts = {}
      const handlerName = this.query.toLowerCase().trim()
      const filteredAuthor = this.authors.filter(item => item.name.toLowerCase().includes(handlerName))
      if (!filteredAuthor.length) {
        this.emptyPosts()
      } else {
        paramsPosts.userId = filteredAuthor.map(item => item.id)
        await this.fetchPosts(paramsPosts)
      }
      this.setOldQuery()
    },
  },
  computed: {
    ...mapState(usePosts, ['posts']),
    ...mapState(useAuthor, ['authors']),
    ...mapState(useQuery, ['query', 'oldQuery']),
  },
}
</script>

<style scoped>

</style>