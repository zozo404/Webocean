<template>
  <div class="bg-darkblue text-white">
    <Header />
    <Video />
    <Nuxt class="px-8 pt-4" />
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
html{
  font-family: 'Lexend';
}
</style>