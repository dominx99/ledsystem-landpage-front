<template>
  <v-form class="contact-form pa-10 dark3">
    <v-text-field
      label="Email"
      filled
    />
    <v-textarea
      label="Wiadomość"
      filled
    ></v-textarea>
    <v-btn
      class="float-right"
      color="teal"
    >Wyślij</v-btn>
    <div style="clear:both"></div>
  </v-form>
</template>

<style scoped lang="scss">
.contact-form {
  width: 100%;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768) {
    border-radius: 8px 0 0 8px;
  }
}
</style>
