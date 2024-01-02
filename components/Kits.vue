<template>
  <div class="relative">
    <div>
      <!-- start card for -->
      <div>
        <div
          v-if="kits"
          class="rounded-lg overflow-hidden flex flex-wrap justify-center gap-5 py-2"
        >
          <!-- start card -->
          <div
            :class="{ visible: isVisible }"
            v-for="kit in kits"
            :key="kit.id"
            class="group group overflow-hidden relative text-black h-72 w-72 rounded-2xl fade-scroll"
          >
            <div class="w-72 h-full bg-cover bg-center">
              <NuxtImg
                :src="kit.imageId.asset._ref"
                :alt="kit.imageId.alt"
                provider="sanity"
                class="w-72 h-full object-cover object-center rounded-2xl hover:duration-700 duration-700"
                loading="lazy"
              />
            </div>
            <div
              class="absolute bg-[#68C3D4] -bottom-24 w-72 h-36 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-700 duration-700 group-hover:h-60 justify-between text-center"
            >
              <div
                class="font-bold text-lg flex flex-row flex-wrap justify-evenly"
              >
                <p class="first-letter:uppercase">
                  {{ kit.title }} {{ kit.price }}€
                </p>
                <!-- if the kit is new -->
                <p
                  v-if="kit.new == true"
                  class="bg-darkblue px-2 rounded-full text-white"
                >
                  <span class="animate-pulse">New</span>
                </p>
              </div>
              <!-- description of kit -->
              <h1
                class="font-bold text-3xl first-letter:uppercase pt-3 text-black font-rubik-doodle-shadow"
              >
                {{ kit.title }}
              </h1>
              <!-- description of kit -->
              <p class="font-bold">
                {{ truncateDescription(kit.description) }}
              </p>
              <!-- btn buy -->
              <NuxtLink :to="kit.slug.current" class="flex justify-center">
                <button
                  class="smky-btn3 relative py-2 px-6 hover:text-white after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-10 after:z-[-10] after:bg-darkblue after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black w-1/2 self-center font-rubik-doodle-shadow font-bold"
                >
                  More
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- end card -->
        </div>

        <!-- Debug -->
        <!-- {{ console.log(kits) }} -->
      </div>
    </div>
    <!-- end card for -->
  </div>
</template>
<script>
import scrollFadeMixin from '~/mixins/scrollFadeMixin';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Kits",
  mixins: [scrollFadeMixin],
  props: {
    kits: {
      default: null,
      type: Array,
    },
  },
  methods: {
    truncateDescription(description) {
      const maxLength = 110;
      if (description.length <= maxLength) {
        return description;
      } else {
        return description.slice(0, maxLength) + "...";
      }
    },
  },
};
</script>
