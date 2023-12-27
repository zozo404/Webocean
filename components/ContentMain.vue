<template>
  <div>
    <h1 class="text-4xl font-blackmb-6 font-sans">Welcome</h1>
    <p class="container mx-auto pb-4 text-lg font-bold">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta
      similique id dolores neque assumenda quidem mollitia voluptatem est.
      Voluptatum maiores, assumenda rerum fugiat sequi recusandae animi et
      consequuntur quidem !
    </p>
    <h1 class="text-xl font-extrabold font-sans my-2">
      See at our new products
    </h1>
    <Titles title="Latest News" />
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
