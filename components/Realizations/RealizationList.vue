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
    </v-container>
  </section>
</template>

<script>
import RealizationCard from './RealizationCard'
import { mapState } from 'vuex'

export default {
  components: {
    RealizationCard,
  },
  computed: mapState({
    realizations: state => state.guest.realizations.state.realizations,
    loading: state => state.guest.realizations.state.loading.realizationList,
  }),
  mounted() {
    this.$store.dispatch('guest/realizations/fetch')
  }
}
</script>
