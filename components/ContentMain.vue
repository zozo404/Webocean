<template>
  <div class="text-center">
    <div class="text-xl 3xl:text-2xl font-blackmb-6 flex justify-center fade-scroll" :class="{ visible: isVisible }">
      <p>Welcome</p>
      <NuxtImg
        :src="Bubbles.images[0].asset._ref"
        class="w-8"
        :alt="Bubbles.images[0].alt"
        provider="sanity"
      />
    </div>
    <p class="container mx-auto py-4 text-base fade-scroll" :class="{ visible: isVisible }">
      Welcome to Webocean, you can discover the latest news and pictures related to the marine world. But you can also buy specialized kits!
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scrollFadeMixin from '~/mixins/scrollFadeMixin';

export default {
  name: "ContentMain",
    mixins: [scrollFadeMixin],
  computed: {
    ...mapGetters(["getImageSite"]),
    Bubbles() {
      return this.getImageSite.find((el) => el.name === "bubbles");
    },
  },
};
</script>
