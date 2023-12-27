<template>
  <div class="text-center container mx-auto my-4">
    <h2 class="text-4xl font-extrabold text-gray-800 mb-12 font-sans">
      Discover our kits
    </h2>
    <Kits :kits="Kits" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: "OceanKit",
  computed: {
    ...mapGetters(["getKit"]),
    Kits () {
      return this.getKit
    }
  }
}
</script>