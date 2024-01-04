<template>
  <div>
    <div class="relative overflow-hidden">
      <video autoplay loop muted playsinline class="blur-element w-full">
        <source src="/oceanVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        class="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-9 text-base md:text-xl uppercase z-10 md:top-[42%] lg:text-2xl 2xl:text-3xl 3xl:text-4xl"
      >
        <p class="font-rubik-doodle-shadow font-bold tracking-[0.25rem]">Webocean</p>
      </div>
      <Wavesvg />
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPage",
};
</script>
