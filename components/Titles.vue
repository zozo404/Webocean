<template>
  <div
    class="flex flex-col justify-center items-center pt-4 pb-4 fade-scroll my-2"
    :class="{ visible: isVisible }"
  >
    <div
      class="skew-x-[-20deg] w-3/4 md:w-1/3 justify-center items-center bg-bluefooter"
    >
      <p
        class="w-full sm:text-4xl lg:text-4xl text-xl text-gray-300 text-center"
      >
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  name: "TitlesApp",
  mixins: [scrollFadeMixin],
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>