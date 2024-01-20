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
/* width */
::-webkit-scrollbar {
    width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #000B76;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #68C3D4;
    border-radius: 1rem;
    border: 3px solid #000B76;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>