<template>
  <div class="text-center">
    <div class="text-xl 3xl:text-2xl font-blackmb-6 flex justify-center fade-scroll" :class="{ visible: isVisible }">
      <p>Welcome</p>
      <NuxtImg
        :src="Bubbles.imageId.asset._ref"
        class="w-8"
        :alt="Bubbles.imageId.alt"
        provider="sanity"
      />
    </div>
    <p class="container mx-auto py-4 text-base fade-scroll" :class="{ visible: isVisible }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta
      similique id dolores neque assumenda quidem mollitia voluptatem est.
      Voluptatum maiores, assumenda rerum fugiat sequi recusandae animi et
      consequuntur quidem !
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
