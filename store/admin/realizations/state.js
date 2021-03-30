export const state = {
  realization: {},
  realizations: [],
  form: {
    medias: [],
    realization: {
      id: null,
      name: '',
      description: '',
      slug: '',
      images: [],
    },
  },
  loading: {
    realization: true,
    realizations: true,
    addRealization: false,
    editRealization: false,
    realizationImages: false,
    realizationMainImage: false,
  },
  errors: {
    editRealization: {
      slug: [],
    },
    addRealization: {
      slug: [],
    },
  }
}
