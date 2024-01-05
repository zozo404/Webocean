<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-center h-screen">
    <h1 v-if="error.statusCode === 404">
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <h1 class="text-6xl font-bold font-rubik-doodle-shadow animation-target">
            <span class="letter" style="opacity: 0">4</span>
            <span class="letter" style="opacity: 0">0</span>
            <span class="letter" style="opacity: 0">4</span>
          </h1>
          <p class="text-xl font-semibold">Page not found</p>
          <p>
            The page you are looking for might be under construction or does not
            exist.
          </p>
          <a
            href="/"
            class="text-red-600 text-2xl hover:underline mt-4 block animate-bounce"
          >
            Go back home
          </a>
        </div>
      </div>
    </h1>
    <h1 v-else>
      <div
        class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my"
      >
        <div class="text-center">
          <h1 class="text-6xl font-bold">An error occurred</h1>
          <p class="text-xl font-semibold">Page not found</p>
          <p class="mt-4">
            The page you are looking for might be under construction or does not
            exist.
          </p>
          <a
            href="/"
            class="text-red-600 hover:underline mt-4 block animate-bounce"
          >
            Go back home
          </a>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  layout: "error-layout",
  // eslint-disable-next-line vue/require-prop-types
  props: ["error"], // you can set a custom layout for the error page
  mounted() {
    this.playAnimation();
  },
  methods: {
    playAnimation() {
      anime({
        targets: ".animation-target .letter",
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        delay: anime.stagger(500), // Délai entre chaque lettre
        duration: 2000,
        loop: true,
      });
    },
  },
};
</script>