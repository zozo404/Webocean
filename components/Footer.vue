<template>
  <div>
    <footer class="bg-bluefooter text-gray-100 relative pb-4 lg:pt-0">
      <BottomSvg />
      <div>
        <div class="pt-4">
          <!-- summary -->
          <ul class="flex justify-around text-center gap-1">
            <li
              v-for="section in sections"
              :key="section.id"
              class="hover:text-[#68C3D4] transition fade-scroll"
              :class="{ visible: isVisible }"
            >
              <NuxtLink :to="section.link">
                {{ section.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- copyrights -->
      <div class="text-center pt-4">
        <p class="fade-scroll" :class="{ visible: isVisible }">
          &copy; 2023-2024 Webocean.netlify.app <br />
          <NuxtLink to="legal-mention">Legal Mention</NuxtLink> | All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  mixins: [scrollFadeMixin],
  data() {
    return {
      sections: [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "News", link: "news" },
        { id: 3, name: "Ocean Kit", link: "oceankit" },
        { id: 4, name: "Pictures", link: "pictures" },
        { id: 5, name: "Contact", link: "contact" },
      ],
    };
  },
};
</script>