<template>
  <div>
    <ContentMain />
    <p>home page</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import News from "../components/News.vue";

export default {
  components: { News },
  name: "IndexPage",
  // eslint-disable-next-line vue/no-unused-components
  computed: {
    ...mapGetters(["getImageSite", "getNews"]),
    ImageSite() {
      return this.getImageSite;
    },
    News() {
      return this.getNews;
    }
  },
};
</script>
