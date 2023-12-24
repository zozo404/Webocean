<template>
  <div class="bg-green-600">
    home page
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "IndexPage",
  // eslint-disable-next-line vue/no-unused-components
  computed: {
    ...mapGetters(["getImageSite"]),
    ImageSite () {
      return this.getImageSite
    }
  }
}
</script>