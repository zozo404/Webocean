<template>
  <div class="bg-darkblue text-white">
    <Header />
    <Video />
    <Nuxt class="SamsungGA425G:px-8 pt-4" />
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
export default {
  name: "Default",
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["getImageSite"]),
    Fond() {
      return this.getImageSite.find((el) => el.name === "fond");
    },
  },
};
</script>
<style>
html {
  font-family: "Lexend";
}
.fade-scroll {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.backgroundBlur{
  backdrop-filter: blur(4px);
}
.blur-element{
  filter: blur(1px);
}
.fade-scroll.visible {
  opacity: 1;
}
</style>