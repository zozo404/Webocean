<template>
  <div class="container mx-auto p-8">
    <section
      v-for="section in legalSections"
      :key="section.title"
      class="mb-8 fade-scroll"
      :class="{ visible: isVisible }"
    >
      <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
      <p v-if="section.content" v-html="section.content"></p>
      <ul v-if="section.listItems">
        <li v-for="item in section.listItems" :key="item">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import scrollFadeMixin from "~/mixins/scrollFadeMixin";

export default {
  mixins: [scrollFadeMixin],
  data() {
    return {
      legalSections: [
        {
          title: "Legal Notice",
          content:
            "In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004, for Confidence in the Digital Economy, known as L.C.E.N., Users of the zozoy.fr site are informed of the following legal notices.",
        },
        {
          title: "Editor",
          content: "The edition of the zozoy.fr site is ensured by:",
          listItems: ["zozoy"],
        },
        {
          title: "Host",
          content: "The zozoy.fr site is hosted by Netlify.",
        },
        {
          title: "Contact",
          content:
            "Email address: <a href='mailto:zozoydev@gmail.com' class='underline'>zozoydev@gmail.com</a>",
        },
        {
          title: "Purchase",
          content:
            "Products are purchasable with the link redirecting to Stripe. Note that these are test links, meaning you will not be charged when making a purchase.",
        },
        {
          title: "Responsibility",
          content:
            "We provide free information content. However, visitors are responsible for ensuring the relevance of this information to their own situation. The user therefore agrees to use this information under their sole responsibility and releases zozoy.fr and associated individuals from any liability in this regard.",
        },
        {
          title: "Access to the Site",
          content:
            "The site is accessible from anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruption that may result from maintenance needs. In case of modification, interruption, or suspension of services, zozoy.fr cannot be held responsible.",
        },
        {
          title: "Intellectual Property",
          content:
            "The general structure, texts, images, videos, graphics, logos, downloadable documents, and all other elements composing the zozoy.fr site are the exclusive property of zozoy, unless otherwise specified. Any total or partial representation of this site by any person without the express authorization of the editor is prohibited and would constitute an infringement punishable by Articles L. 335-2 and following of the Intellectual Property Code.",
        },
        {
          title: "Protection of Personal Data",
          content:
            "Personal data is protected by various laws and regulations. In compliance with the General Data Protection Regulation (GDPR), users of the site can contact the responsible parties by email at: <a href='mailto:zozoydev@gmail.com' class='underline'>zozoydev@gmail.com</a> or use the site's contact form. zozoy.fr is committed to preserving the confidentiality of information provided online by the user.",
        },
      ],
    };
  },
};
</script>
