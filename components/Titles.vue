<template>
  <div class="flex flex-col justify-center items-center pt-2">
    <div class="flex w-3/4 md:w-1/3 justify-center items-center">
      <p class="lg:w-1/2 sm:text-4xl lg:text-4xl text-xl text-gray-300 text-center">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlesApp',
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>