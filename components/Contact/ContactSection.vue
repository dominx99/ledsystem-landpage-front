<template>
  <section
    id="contact"
    class="dark2"
    style="margin-bottom: 7.5rem"
  >
    <v-container>
      <h3 class="text-h3 text-center my-16">Kontakt</h3>
      <v-card class="d-flex align-items-center">
        <ContactForm />
        <MediaCard />
      </v-card>
    </v-container>
  </section>
</template>

<script>
import ContactForm from './ContactForm'
import MediaCard from './../Landpage/Contact/Media/MediaCard'

export default {
  components: {
    ContactForm,
    MediaCard,
  }
}
</script>
