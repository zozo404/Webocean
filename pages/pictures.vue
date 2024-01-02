<template>
  <div class="text-center container mx-auto my-4">
    <h2 class="text-2xl font-light mb-12 font-sans">Discover our new photos</h2>
    <Pictures :pictures="Pictures" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PicturesPage",
  computed: {
    ...mapGetters(["getImageSite"]),
    Pictures() {
      // Filtrer les images qui ont une date
      const pictures = this.getImageSite.filter((picture) => picture.date);

      return pictures;
    },
  },
};
</script>