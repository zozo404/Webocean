<template>
  <div>
    <!-- div 1 -->
    <div
      v-if="news"
      class="flex flex-col items-center flex-wrap justify-center gap-8 px-4 pb-4"
    >
      <!-- div by news  -->
      <div
        v-for="(news, index) in news"
        :key="news.id"
        class="fade-scroll text-center w-full"
        :class="{ visible: isVisible }"
      >
        <NuxtLink
          :to="news.slug.current"
          class="flex sm:items-center gap-4 lg:gap-8 xl:gap-32 2xl:gap-[12rem] w-full justify-center"
          :class="{
            'flex-row': index % 2 === 0,
            'flex-row-reverse': index % 2 !== 0,
          }"
        >
          <!-- image new -->
          <div class="text-center">
            <NuxtImg
              :src="news.imageId.asset._ref"
              :alt="news.imageId.alt"
              provider="sanity"
              class="rounded-2xl w-72 sm:w-[50rem] lg:w-[33rem] max-h-72"
            />
            <div class="flex gap-2 justify-center sm:hidden pt-2">
              <h2 class="first-letter:uppercase">{{ news.title }} - {{ formatDate(news.date) }}</h2>
              <!-- if the news is new -->
              <p
                v-if="news.new == true"
                class="text-black font-bold bg-[#68C3D4] px-2 rounded-full"
              >
                <span class="animate-pulse">New</span>
              </p>
            </div>
          </div>
          <!-- text new -->
          <div class="hidden sm:flex flex-col items-center justify-center">
            <div class="flex gap-2">
              <h2 class="first-letter:uppercase">{{ news.title }} - {{ formatDate(news.date) }}</h2>
              <!-- if the news is new -->
              <p
                v-if="news.new == true"
                class="text-black font-bold bg-[#68C3D4] px-2 rounded-full"
              >
                <span class="animate-pulse">New</span>
              </p>
            </div>
            <br />
            <p class="sm:w-[20rem] xl:w-[33rem] 3xl:w-[40rem]">
              {{ truncateDescription(news.description) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "News",
  mixins: [scrollFadeMixin],
  props: {
    news: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 200;
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + "...";
      }
    },
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString("fr-FR");
      return formattedDate;
    },
  },
};
</script>
