<template>
  <div>
    <!-- div 1 -->
    <div v-if="news" class="flex flex-col gap-8 px-4 pb-4">
      <!-- div by news  -->
      <div
        v-for="news in news"
        :key="news.id"
        :class="{ visible: isVisible }"
        class="fade-scroll"
      >
        <NuxtLink :to="news.slug.current" class="flex justify-center">
          <!-- image new -->
          <div class="text-center">
            <NuxtImg :src="news.imageId.asset._ref" provider="sanity" class="rounded-2xl w-72 max-h-72" />
            <h2 class="first-letter:uppercase">
              {{ news.title }} - {{ formatDate(news.date) }}
            </h2>
          </div>
          <!-- text new -->
          <div class="hidden md:block">
            <p>{{ truncateDescription(news.description) }}</p>
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
