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
        />
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn
          @click="editRealization(item)"
          icon
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: 'auth',
    mounted() {
      this.$store.dispatch('admin/realizations/fetch')
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
      editRealization(realization) {
        this.$router.push({ name: 'admin-realizacje-slug', params: { slug: realization.slug } })
      },
      imageUrl(product) {
        return ''
        if (! product.image) {
          return process.env.storageUrl + product.images[0].thumbnail.path
        }

        return process.env.storageUrl + product.image.thumbnail.path
      },
    }
  }
</script>
