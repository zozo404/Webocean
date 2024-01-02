<template>
  <!-- div slug news -->
  <div v-if="news" class="text-center">
    <div class="cursor-pointer pt-4" @click="goBack">
      <span class="pl-2 py-3 font-rubik-doodle-shadow">
        <i class="fa-solid fa-arrow-left" />
        Back
      </span>
    </div>
    <div
      class="flex flex-col items-center mt-10 gap-4 lg:flex-row lg:px-12 2xl:px-24 3xl:px-28"
    >
      <!-- img -->
      <NuxtImg
        provider="sanity"
        :src="news.imageId.asset._ref"
        :alt="news.imageId.alt"
        placeholder
        class="w-auto h-auto sm:w-1/2 rounded-md 2xl:max-w-xl 3xl:max-w-2xl fade-scroll"
        :class="{ visible: isVisible }"
      />
      <div
        class="px-2 md:w-2/3 lg:w-auto lg:flex lg:flex-col lg:items-center lg:grow"
      >
        <!-- name of news -->
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase text-xl lg:text-2xl xl:text-3xl fade-scroll" :class="{ visible: isVisible }">
            <span class="font-rubik-doodle-shadow" >
              {{ news.title }}
            </span>
            | {{ formatDate(news.date) }}
          </p>
          <!-- description of news -->
        </div>
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase fade-scroll" :class="{ visible: isVisible }">
            {{ news.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- div slug kits -->
  <div v-else-if="kits" class="text-center">
    <div class="cursor-pointer pt-4" @click="goBack">
      <span class="pl-2 py-3 font-rubik-doodle-shadow">
        <i class="fa-solid fa-arrow-left" />
        Back
      </span>
    </div>
    <div
      class="flex flex-col items-center mt-10 gap-4 lg:flex-row lg:px-12 2xl:px-24 3xl:px-28"
    >
      <!-- img -->
      <NuxtImg
        provider="sanity"
        :src="kits.imageId.asset._ref"
        :alt="kits.imageId.alt"
        placeholder
        class="w-auto h-auto sm:w-1/2 rounded-md 2xl:max-w-xl 3xl:max-w-2xl fade-scroll"
        :class="{ visible: isVisible }"
      />
      <div
        class="px-2 md:w-2/3 lg:w-auto lg:flex lg:flex-col lg:items-center lg:grow"
      >
        <!-- name of kits -->
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase text-xl lg:text-2xl xl:text-3xl fade-scroll" :class="{ visible: isVisible }">
            <span class="font-rubik-doodle-shadow" >
              {{ kits.title }}
            </span>
            - {{ kits.price }} €
          </p>
          <!-- description of news -->
        </div>
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase fade-scroll" :class="{ visible: isVisible }">
            {{ kits.description }}
          </p>
        </div>
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <BtnBuy :kits="kits" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BtnBuy from "@/components/BtnBuy.vue";
import scrollFadeMixin from '~/mixins/scrollFadeMixin';


export default {
  name: "SlugPage",
  mixins: [scrollFadeMixin],
  components: {
    BtnBuy,
  },
  computed: {
    ...mapGetters(["getNews", "getKit"]),
    routeSlug() {
      return this.$route.params.slug;
    },
    news() {
      return this.getNews.find((el) => el.slug.current === this.routeSlug);
    },
    kits() {
      return this.getKit.find((el) => el.slug.current === this.routeSlug);
    },
  },
  // Ajoutez cette méthode pour la redirection vers la page 404
  beforeMount() {
    if (!this.news && !this.kits) {
      this.$router.push("../layouts/error");
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString("fr-FR");
      return formattedDate;
    },
  },
};
</script>