<template>
  <div class="bg-darkblue text-white">
    <Header />
    <Video />
    <Nuxt />
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
export default {
  name: "Default",
  components: {
    Header
  }
}
</script>