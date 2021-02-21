<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/6a89629369fce10d2a036dcab31c7747/led6.jpg',
      },
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/cf692db96ba14dd827e53d0e2848d04b/led5.jpg',
      },
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/f666248ae5178792f79aa86a0e656e55/led4.jpg',
      },
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/adc3800ecfdde1d5af691b14ab773081/led3.jpg',
      },
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/232998ccb1b09495be0f90a6a923b984/led2.jpg',
      },
      {
        src: 'https://trello-attachments.s3.amazonaws.com/60054e6905c5e81d70bd86b3/60060ea5a515b189180b3db3/1d89c789c703ee1cbe5d9c2e0abe76c6/led1test.jpg',
      },
    ],
  })
}

</script>
