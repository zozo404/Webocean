<template>
  <div class="text-center">
    <div class="text-2xl font-blackmb-6 font-sans flex justify-center">
      <p>Welcome </p>
      <NuxtImg src="/bubbles.png" class="w-8"/>
    </div>
    <p class="container mx-auto py-4 text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta
      similique id dolores neque assumenda quidem mollitia voluptatem est.
      Voluptatum maiores, assumenda rerum fugiat sequi recusandae animi et
      consequuntur quidem !
    </p>
    <Titles title="Latest News" class="pb-4" />
    <News :news="LastNews" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContentMain",
  computed: {
    ...mapGetters(["getNews"]),
    LastNews() {
      const LastNews = this.getNews.filter((news) => news.new === true);
      // Triez les actualités par date de manière décroissante
      const sliceNews = LastNews.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return sliceNews.slice(0, 2);
    },
  },
};
</script>
