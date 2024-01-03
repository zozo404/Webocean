<template>
  <div>
    <!-- Main content -->
    <main class="container mx-auto my-4 px-4 2xl:px-24 3xl:px-4 md:mb-0">
      <div class="text-center pb-4 xl:pb-12">
        <p class="mb-8">You can contact us using the form below.</p>
      </div>
      <strong><i>🚧 Fake contact form 🚧</i></strong>
      <!-- Contact form -->
      <section class="lg:flex lg:flex-wrap lg:justify-around">
        <div
          class="lg:flex-grow 3xl:flex-grow-0 3xl:w-2/6 flex flex-col lg:pr-4 md:items-center"
        >
          <h2 class="text-2xl font-bold mb-4w">Contact formt</h2>
          <form class="max-w-lg md:w-full" @submit.prevent="submitForm">
            <!-- Nom et prénom -->
            <div class="mb-4">
              <label for="fullName" class="block text-base"
                >First and last name</label
              >
              <input
                id="fullName"
                v-model="fullName"
                type="text"
                name="fullName"
                class="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <!-- Adresse e-mail -->
            <div class="mb-4">
              <label for="email" class="block text-base">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <!-- object -->
            <div class="mb-4">
              <label for="object" class="block text-base">Object</label>
              <input
                id="object"
                v-model="object"
                type="text"
                name="object"
                class="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <!-- Message -->
            <div class="mb-4">
              <label for="message" class="block text-base">Message</label>
              <textarea
                id="message"
                v-model="message"
                name="message"
                rows="4"
                class="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <!-- Send button -->
            <div class="text-center sm:text-start md:text-center">
              <button
                class="smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-10 after:z-[-10] after:bg-[#68C3D4] after:rounded-t-full after:w-full after:bottom-0 after:left-0 w-1/2 self-center font-rubik-doodle-shadow hover:font-bold"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div class="hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3143337.630630797!2d3.2825448!3d39.7022208!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1702056238801!5m2!1sfr!2sfr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="border border-white"
          />
        </div>
      </section>

      <!-- Coordonnées -->
      <section class="mt-8 text-center">
        <div class="pb-4 lg:pb-0">
          <hr class="border-t-2 border-white mb-6 mx-auto w-16 opacity-50" />
          <h2 class="text-2xl font-bold mb-4">Contact details</h2>
          <strong><i>🚧 Fake data 🚧</i></strong>
          <div class="text-lg">
            <a href="https://maps.app.goo.gl/SMRWnJ9YUquGmZ8B8" target="_blank">
              <strong>Adresse :</strong> 123 Rue de l'Exemple, Ville, Palma<br />
            </a>
            <a href="tel:+33 1 23 45 67 89" target="_blank">
              <strong>Téléphone :</strong> +33 1 23 45 67 89<br />
            </a>
            <a href="mailto:fake@mail" target="_blank">
              <strong>E-mail :</strong> fake@mail
            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3143337.630630797!2d3.2825448!3d39.7022208!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1702056238801!5m2!1sfr!2sfr"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full md:w-3/4 mt-2 lg:hidden border border-black"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
      object: "",
    };
  },
  methods: {
    submitForm() {
      // Mettez ici la logique pour envoyer le formulaire (par exemple, une requête API)
      // eslint-disable-next-line no-console
      console.log("Formulaire soumis !");
    },
  },
};
</script>