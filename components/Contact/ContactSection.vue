<template>
  <section
    id="contact"
    class="dark1"
  >
    <v-container>
      <h3 class="text-h3 text-center my-16">Kontakt</h3>
      <v-card class="contact-card rounded-lg">
        <v-row no-gutters>
          <v-col
            :md="6"
            :xs="12"
          >
            <ContactForm />
          </v-col>
          <v-col
            :md="6"
            :xs="12"
          >
            <MediaCard />
          </v-col>
        </v-row>
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

<style lang="scss">
.contact-card {
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
