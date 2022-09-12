<template>
  <div class="result">
    <div class="container">
      <ul v-if="!isLoading"
          class="result__list"
      >
        <search-result-item v-for="post of posts"
                            :post="post"
        />
      </ul>

      <div v-if="!isLoading && !posts.length"
           class="result__empty"
      >
        Ooops, can't find author...
      </div>
    <the-spinner v-if="isLoading"/>
    </div>
  </div>
</template>

<script>
import SearchResultItem from "./SearchResultItem.vue";
import {mapActions, mapState} from "pinia";
import {usePosts} from "../store/posts";
import {useAuthor} from "../store/author";
import TheSpinner from "./TheSpinner.vue";

export default {
  name: "SearchResult",
  components: {TheSpinner, SearchResultItem},
  computed: {
    ...mapState(usePosts, ['posts', 'isLoading']),
  },
}
</script>

<style scoped>

</style>