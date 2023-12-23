<template>
  <div>
    <p>footer1</p>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    isActive: true;
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>