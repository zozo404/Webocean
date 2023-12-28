<template>
  <div class="h-8 iphoneSE:h-12 sm:h-16 md:h-20 lg:h-24 xl:h-32 2xl:h-40 3xl:h-48" v-if="Waves">
    <NuxtImg
      :src="Waves.imageId.asset._ref"
      provider="sanity"
      alt="logo"
      class="w-full"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Wavesvg1",
  computed: {
    ...mapGetters(["getImageSite"]),
    Waves() {
      return this.getImageSite.find((el) => el.name === "fond");
    },
  },
};
</script>

<style>
</style>