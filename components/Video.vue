<template>
  <div>
    <div class="relative overflow-hidden">
      <video autoplay loop muted playsinline class="video-bg">
        <source src="/oceanVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        class="text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base uppercase z-10"
      >
        <p>Webocean</p>
      </div>
      <Wavesvg />
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoPage",
  props: {
    bgvideo: {
      default: null,
      type: Array,
    },
  },
};
</script>
