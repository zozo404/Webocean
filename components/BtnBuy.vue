<template>
  <div>
    <!-- Bouton d'achat -->
    <a :href="kits.stripeUrl" class="flex justify-center">
      <button
        class="smky-btn3 relative hover:text-[#FBD1A2] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-10 after:z-[-10] after:bg-[#403233] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black self-center rounded lg:rounded-none"
      >
        Buy {{ kits.price }}€
      </button>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "BtnBuy",
  props: {
    kits: {
      default: null,
      type: Object
    }
  }
}
</script>