<template>
  <v-card>
    <v-card-title class="align-center">
      <div class="mr-5">Realizacje</div>
      <v-btn
        outlined
        dark
        color="deep-purple"
        to="/admin/realizacje/nowa"
      >
        Nowa
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Szukaj"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :loading="loading"
      v-model="selected"
      :headers="headers"
      :items="realizations"
      :search="search"
      item-key="id"
      show-select
    >
      <template v-slot:item.image="{ item }">
        <v-img
          width="100"
          :aspect-ratio="16/9"
          :src="imageUrl(item)"
          alt="Miniaturka głownego obrazka realizacji"
        />
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex align-center">
        <v-switch
          v-model="item.visibleOnMainPage == '1'"
          @change="handleToggleRealizationVisibilityOnMainPage($event, item.id)"
        ></v-switch>
        <v-btn
          @click="viewRealization(item)"
          icon
          color="green"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn
          @click="editRealization(item)"
          icon
          color="yellow"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          @click="handleRemoveRealization(item)"
          color="red"
          icon
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow'
        }
      ],
    }
  },
  layout: 'admin',
  middleware: 'auth',
  mounted() {
    this.fetch()
  },
  computed: {
    realizations() {
      return this.$store.state.admin.realizations.state.realizations
    },
    loading() {
      return this.$store.state.admin.realizations.state.loading.realizations
    },
  },
  data () {
    return {
      selected: [],
      search: '',
      headers: [
        {
          text: 'Obrazek',
          sortable: false,
          filterable: false,
          value: 'image',
        },
        {
          text: 'Nazwa',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Slug',
          align: 'start',
          sortable: true,
          value: 'slug',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false,
        },
      ],
    }
  },
  methods: {
    ...mapActions('admin/realizations', ['fetch', 'removeRealization', 'toggleRealizationVisibilityOnMainPage']),
    viewRealization(realization) {
      this.$router.push({ name: 'realizacje-slug', params: { slug: realization.slug } })
    },
    editRealization(realization) {
      this.$router.push({ name: 'admin-realizacje-slug', params: { slug: realization.slug } })
    },
    async handleRemoveRealization(realization) {
      try {
        await this.removeRealization(realization.id)

        this.fetch()
      } catch (e) {
        alert('Nie udało się usunąć realizacji')
      }
    },
    imageUrl(realization) {
      return realization.mainImage.images.find(image => image.type == 'thumbnail').url
    },
    handleToggleRealizationVisibilityOnMainPage(event, realizationId) {
      this.toggleRealizationVisibilityOnMainPage({ realizationId, isVisible: event })
    },
    isVisible(item) {
      console.log(item.visibleOnMainPage == "1")
      return item.visibleOnMainPage == "1" ? true : false
    },
  }
}
</script>
