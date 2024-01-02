<template>
  <div class="text-center container mx-auto my-4">
    <h2 class="text-2xl font-light mb-12 font-sans">
      Discover all the news
    </h2>
    <News :news="News" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: "NewsPAge",
  computed: {
    ...mapGetters(["getNews"]),
    News () {
      return this.getNews
    }
  }
}
</script>