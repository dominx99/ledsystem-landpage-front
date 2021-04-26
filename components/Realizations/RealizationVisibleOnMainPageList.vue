<template>
  <section id="realizations" class="dark1 pb-16">
    <v-container>
      <h3 class="text-h3 text-center my-16">Realizacje</h3>
      <v-row>
        <v-col
          v-for="(realization, index) in realizations"
          :key="index"
          :cols="12"
          :md="6"
        >
          <RealizationCard
            :realization="realization"
          />
        </v-col>
      </v-row>

      <div
        class="d-flex justify-center mt-md-15 mt-10"
      >
        <SeeAllRealizationsButton class="px-md-12" />
      </div>
    </v-container>
  </section>
</template>

<script>
import RealizationCard from './RealizationCard.vue'
import SeeAllRealizationsButton from './SeeAllRealizationsButton.vue'
import { mapState } from 'vuex'

export default {
  components: {
    RealizationCard,
    SeeAllRealizationsButton,
  },
  computed: mapState({
    realizations: state => state.guest.realizations.state.realizationsVisibleOnMainPage,
    loading: state => state.guest.realizations.state.loading.realizationsVisibleOnMainPage,
  }),
  mounted() {
    this.$store.dispatch('guest/realizations/fetchVisibleOnMainPage')
  }
}
</script>
