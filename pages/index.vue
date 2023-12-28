<template>
  <div>
    <ContentMain />
    <Titles title="Latest News" class="pb-4" />
    <News :news="LastNews" />
    <Titles title="Our latest kits" class="pb-4" />
    <Kits :kits="LastKits" />
    <p>home page</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapGetters(["getNews", "getKit"]),
    LastNews() {
      const LastNews = this.getNews.filter((news) => news.new === true);
      // descending ID
      const sliceNews = LastNews.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return sliceNews.slice(0, 2);
    },
    LastKits() {
      const LastKits = this.getKit.filter((kits) => kits.new === true);
      // descending ID
      const sliceKits = LastKits.slice().sort((a, b) => b.id - a.id);

      return sliceKits.slice(0, 2);
    },
  },
};
</script>