<template>
  <div>
    <!-- div 1 -->
    <div v-if="news" class="flex flex-wrap justify-center gap-8 xl:gap-28 px-4 pb-4 ">
      <!-- div by news  -->
      <div
        v-for="news in news"
        :key="news.id"
        :class="{ visible: isVisible }"
        class="fade-scroll text-center md:w-[45%] lg:w-72"
      >
        <NuxtLink :to="news.slug.current" class="flex justify-center md:flex-col md:items-center gap-2">
          <!-- image new -->
          <div class="text-center">
            <NuxtImg :src="news.imageId.asset._ref" :alt="news.imageId.alt" provider="sanity" class="rounded-2xl w-72 max-h-72" />
            <h2 class="first-letter:uppercase">
              {{ news.title }} - {{ formatDate(news.date) }}
            </h2>
          </div>
          <!-- text new -->
          <div class="hidden md:flex justify-center">
            <p class="w-2/3">{{ truncateDescription(news.description) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin';
export default {
  name: "News",
  mixins: [scrollFadeMixin],
  props: {
    news: {
      default: null,
      type: Array,
    },
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 110;
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
