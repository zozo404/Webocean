<template>
  <div class="my-4">
    <h1 class="text-3xl font-extrabold mb-12 font-sans font-rubik-doodle-shadow text-center">
      Discover our new photos
    </h1>
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