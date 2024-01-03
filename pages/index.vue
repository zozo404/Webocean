<template>
  <div>
    <ContentMain />
    <Titles title="Latest News" />
    <News :news="LastNews" />
    <Titles title="Our latest kits" />
    <Kits :kits="LastKits" />
    <Titles title="Our latest pictures" />
    <Pictures :pictures="LastPictures" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapGetters(["getNews", "getKit", "getImageSite"]),
    LastNews() {
      const LastNews = this.getNews.filter((news) => news.new === true);
      // descending ID
      const sliceNews = LastNews.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return sliceNews.slice(0, 3);
    },
    LastKits() {
      const LastKits = this.getKit.filter((kits) => kits.new === true);
      // descending ID
      const sliceKits = LastKits.slice().sort((a, b) => b.id - a.id);

      return sliceKits.slice(0, 3);
    },
    LastPictures() {
      // Filtrer les images qui ont une date
      const LastPictures = this.getImageSite.filter((picture) => picture.date);

      // descendind ID
      const slicePictures = LastPictures.slice().sort((a, b) => b.id - a.id);
      return slicePictures.slice(0, 3);
    },
  },
};
</script>