<template>
  <div class="my-4">
    <h1 class="text-3xl font-extrabold mb-12 font-sans font-rubik-doodle-shadow text-center">
      Discover our kits
    </h1>
    <Kits :kits="Kits" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "OceanKit",
  computed: {
    ...mapGetters(["getKit"]),
    Kits() {
      return this.getKit;
    },
  },
};
</script>