<template>
  <section class="mb-16">
    <v-container>
      <h3 class="text-h3 text-center my-16">Kontakt</h3>
      <ContactForm />
    </v-container>
  </section>
</template>

<script>
import ContactForm from './ContactForm'

export default {
  components: {
    ContactForm,
  }
}
</script>
