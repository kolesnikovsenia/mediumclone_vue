<template>
  <div>
    <div v-if="isLoading">
      <span class="d-flex justify-content-center visually-hidden text-secondary"
        >Loading...</span
      >
    </div>
    <div v-if="error">Something bed happened</div>
    <div v-if="feed">
      <div
        class="article-preview d-flex flex-column"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div
          class="article-meta d-flex justify-content-between align-items-center"
        >
          <div class="d-flex justify-content-between g-2 align-items-center">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              <img :src="article.author.image" class="rounded-circle" />
            </router-link>
            <div class="info">
              <router-link
                :to="{
                  name: 'userProfile',
                  params: {slug: article.author.username},
                }"
                class="author"
              >
                {{ article.author.username }}
              </router-link>
              <span class="date">{{ article.createdAt }}</span>
            </div>
          </div>
          <div>ADD TO FAVORITES</div>
        </div>
        <router-link
          :to="{name: 'article', params: {slug: article.slug}}"
          class="preview-link"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>
      PAGINATION
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
  },
}
</script>
