<template>
  <header
    class="w-full z-20 sticky top-0 text-white bg-darkblue transition1sec"
    :class="{ 'bg-lightblue': isScrolled }"
  >
    <!-- nav desktop -->
    <nav
      class="lg:max-h-28 max-h-20 w-full py-4 lg:py-6 grid grid-cols-2 grid-rows-1 lg:grid-cols-2 items-center justify-between lg:border-none"
      aria-label="Top"
    >
      <!-- logo -->
      <NuxtLink to="/" class="flex justify-center lg:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <NuxtImg
          :src="Logo.images[0].asset._ref"
          provider="sanity"
          alt="logo"
          class="h-full"
          sizes="xs:100vw"
        />
      </NuxtLink>
      <div class="text-right pr-8 lg:hidden flex justify-end" @click="toggle">
        <i class="fa-solid fa-bars cursor-pointer" style="color: #ffffff" />
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex flex-row gap-2 xl:gap-4 items-center"
      >
        <div
          v-for="lien in liens"
          :key="lien.texte"
          class="mb-4 py-4 flex space-x-6"
        >
          <NuxtLink
            key="Index"
            :to="lien.lien"
            class="text-base lg:text-xl 2xl:text-2xl font-medium hover:text-[#68C3D4] transition"
            @click="toggle"
          >
            {{ lien.texte }}
          </NuxtLink>
        </div>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav responsive ouverte -->
    <nav
      :class="{ hidden: isActive }"
      class="lg:hidden w-full absolute top-0 h-screen z-40 grid grid-cols-2 grid-rows-4 bg-opacity-40 backgroundBlur bg-black"
    >
      <div
        class="grid grid-cols-2 grid-rows-1 col-span-2 my-4 h-12 justify-items-center w-full"
      >
        <!-- logo -->
        <NuxtLink to="/" class="flex justify-center lg:col-span-1 h-full">
          <span class="sr-only">Logo</span>
          <NuxtImg
            :src="Logo.images[0].asset._ref"
            provider="sanity"
            alt="logo"
            class="h-full"
            sizes="xs:100vw"
          />
        </NuxtLink>
        <!-- hamburger icon -->
        <div
          class="w-full h-full pr-8 lg:hidden flex justify-end items-center"
          @click="toggle"
        >
          <i
            class="fa-solid fa-xmark cursor-pointer h-5"
            style="color: #ffffff"
          />
        </div>
      </div>
      <!-- liens -->
      <div
        v-for="lien in liens"
        :key="lien.texte"
        class="mb-4 py-4 flex flex-col items-center"
        @click="toggle"
      >
        <NuxtLink
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium hover:text-[#68C3D4] transition"
        >
          {{ lien.texte }}
        </NuxtLink>
      </div>
      <!--  -->
    </nav>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  computed: {
    ...mapGetters(["getImageSite"]),
    Logo() {
      return this.getImageSite.find((el) => el.name === "Logo");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isScrolled: false,
      isActive: true,
      liens: [
        {
          texte: "Home",
          lien: "/",
        },
        {
          texte: "News",
          lien: "/news",
        },
        {
          texte: "Ocean Kit",
          lien: "/oceankit",
        },
        {
          texte: "Pictures",
          lien: "/pictures",
        },
        {
          texte: "Contact",
          lien: "/contact",
        },
      ],
    };
  },
};
</script>
<style>
/* Ajout de la classe bg-lightblue avec la couleur que vous souhaitez pour le défilement */
.bg-lightblue {
  background-color: #000025;
  transition: 1s;
  /* Remplacez ceci par la couleur que vous souhaitez appliquer en fond d'écran lors du défilement */
}
.transition1sec{
  transition: 1s;
}
</style>