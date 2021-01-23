<template>
  <v-card class="pa-6">
    <v-form>
      <v-text-field
        label="Email"
        placeholder="jan.kowalski@gmail.com"
        filled
      />
      <v-textarea
        label="Wiadomość"
        placeholder="Chciałbym uzyskać wycenę montażu oświetlenia"
        filled
      ></v-textarea>
      <v-btn
        class="float-right"
        color="deep-purple"
      >Wyślij</v-btn>
      <div style="clear:both"></div>
    </v-form>
  </v-card>
</template>
