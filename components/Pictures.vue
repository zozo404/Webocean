<template>
  <div>
    <!-- div 1 -->
    <div
      v-if="pictures"
      class="flex flex-col justify-center flex-wrap gap-8 px-4 pb-4 py-2 md:flex-row items-baseline"
    >
      <!-- div by picture  -->
      <div
        v-for="(picture, index) in pictures"
        :key="picture.id"
        :class="{ visible: isVisible }"
        class="fade-scroll w-full text-center"
      >
        <NuxtLink
          :to="picture.slug.current"
          class="flex sm:items-center gap-4 lg:gap-8 xl:gap-32 2xl:gap-[12rem] w-full justify-center"
          :class="{
            'flex-row': index % 2 === 0,
            'flex-row-reverse': index % 2 !== 0,
          }"
        >
          <!-- image new -->
          <div class="text-center">
            <NuxtImg
              :src="picture.images[0].asset._ref"
              :alt="picture.images[0].alt"
              provider="sanity"
              class="rounded-2xl w-72 sm:w-[50rem] lg:w-[33rem] max-h-72"
            />
            <h2 class="first-letter:uppercase sm:hidden pt-2">
              {{ picture.name }} - {{ formatDate(picture.date) }}
            </h2>
          </div>
          <!-- text new -->
          <div class="hidden sm:flex justify-center flex-col">
            <h2 class="first-letter:uppercase sm:block">
              {{ picture.name }} - {{ formatDate(picture.date) }}
            </h2>
            <br>
            <p class="sm:w-[20rem] xl:w-[33rem] 3xl:w-[40rem]">{{ truncateText(picture.text) }}</p>
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
      const maxLength = 200;
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
