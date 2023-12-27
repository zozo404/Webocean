<template>
  <div>
    <!-- div 1 -->
    <div v-if="news">
      <!-- div by news  -->
      <div v-for="news in news" :key="news.id">
        <!-- image new -->
        <div class="text-center">
          <NuxtImg :src="news.imageId.asset._ref" provider="sanity" />
          <h2 class="first-letter:uppercase">
            {{ news.title }} - {{ formatDate(news.date) }}
          </h2>
        </div>
        <!-- text new -->
        <div class="hidden md:block">
          <p>{{ truncateDescription(news.description) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
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