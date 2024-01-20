<template>
  <div class="my-4">
    <h1
      class="text-3xl font-extrabold mb-12 font-sans font-rubik-doodle-shadow text-center"
    >
      Discover all the news
    </h1>
    <News :news="LastNews" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "NewsPAge",
  computed: {
    ...mapGetters(["getNews"]),
    LastNews() {
      const newsCopy = this.getNews.slice(); // Créez une copie du tableau
      return newsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
};
</script>