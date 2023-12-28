<template>
  <div class="" v-if="Waves">
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