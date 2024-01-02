<template>
  <div>
    <!-- div 1 -->
    <div v-if="pictures" class="flex flex-col gap-8 px-4 pb-4 py-2">
      <!-- div by picture  -->
      <div
        v-for="picture in pictures"
        :key="picture.id"
        :class="{ visible: isVisible }"
        class="fade-scroll"
      >
        <NuxtLink :to="picture.slug.current" class="flex justify-center">
          <!-- image new -->
          <div class="text-center">
            <NuxtImg :src="picture.imageId.asset._ref" provider="sanity" class="w-72 max-h-72"/>
            <h2 class="first-letter:uppercase">
              {{ picture.name }} - {{ formatDate(picture.date) }}
            </h2>
          </div>
          <!-- text new -->
          <div class="hidden md:block">
            <p>{{ truncateText(picture.text) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";
export default {
  name: "Pictures",
  mixins: [scrollFadeMixin],
  props: {
    pictures: {
      default: null,
      type: Array,
    },
  },
  methods: {
    truncateText(text) {
      const maxLength = 110;
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + "...";
      }
    },
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleDateString("fr-FR");
      return formattedDate;
    },
  },
};
</script>
