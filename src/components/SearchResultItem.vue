<template>
  <li class="result__item post">
    <div role="link" @keydown.enter="$router.push('#')" tabindex="0" @click="$router.push('#')" data-href="/post"
         class="post__wrapper">
      <div class="post__header">
        <h5 class="post__title">{{ post.title }}</h5>
      </div>
      <div class="post__body">
        <div class="post__text text">{{ post.body }}</div>
      </div>
      <div class="post__footer">
        <div class="post__author"
             v-html="getAuthorName()"
        ></div>
      </div>
    </div>
  </li>
</template>

<script>
import {mapState} from "pinia";
import {useAuthor} from "../store/author";
import {useQuery} from "../store/query";

export default {
  name: "SearchResultItem",
  props: {
    post: {
      type: Object,
    },
  },
  methods: {
    getAuthorName() {
      const filtered = this.authors.filter(item => item.id === this.post.userId)
      const name = filtered?.[0]?.name
      return this.handlerCharacter(name)
    },

    handlerCharacter(name) {
      const query = this.query.toLowerCase()
      if (!query.length) return name
      const newName = name?.toLowerCase()
      const span = `<span>${query}</span>`
      const handlerName = newName?.replace(query, span)
      return handlerName
    }
  },
  computed: {
    ...mapState(useAuthor, ['authors']),
    ...mapState(useQuery, ['query']),
  }
}
</script>
