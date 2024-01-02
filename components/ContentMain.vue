<template>
  <div class="text-center">
    <div class="text-xl font-blackmb-6 flex justify-center">
      <p>Welcome</p>
      <NuxtImg
        :src="Bubbles.imageId.asset._ref"
        class="w-8"
        provider="sanity"
      />
    </div>
    <p class="container mx-auto py-4 text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta
      similique id dolores neque assumenda quidem mollitia voluptatem est.
      Voluptatum maiores, assumenda rerum fugiat sequi recusandae animi et
      consequuntur quidem !
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ContentMain",
  computed: {
    ...mapGetters(["getImageSite"]),
    Bubbles() {
      return this.getImageSite.find((el) => el.name === "bubbles");
    }
  },
};
</script>
