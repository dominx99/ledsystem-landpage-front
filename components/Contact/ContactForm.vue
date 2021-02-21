<template>
  <v-form class="contact-form pa-10 dark1">
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
      color="deep-purple"
    >Wyślij</v-btn>
    <div style="clear:both"></div>
  </v-form>
</template>

<style scoped lang="scss">
.contact-form {
  width: 50%;
}
</style>
