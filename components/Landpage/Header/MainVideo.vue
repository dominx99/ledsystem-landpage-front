<template>
  <section class="header-section"light>
    <v-container class="header-container">
        <header class="header-box">
          <h1 class="text-h3 title">Oświetlenie pomieszczeń</h1>
          <p class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a porta nisl. Mauris viverra, nibh a rutrum finibus, sapien ex vestibulum eros, vitae ultricies turpis quam vitae nulla
          </p>
        </header>
        <div class="animation-box">
          <LightbulbIcon color="#64FFDA" />
          <!--
          <div class="deep-purple"></div>
          <div class="indigo"></div>
          <div class="blue"></div>
          <div class="teal"></div>
          <div class="cyan"></div>
          <div class="green"></div>
          <div class="red"></div>
          <div class="orange"></div>
          <div class="yellow"></div>
          -->
        </div>
    </v-container>
  </section>
</template>

<script>
import LightbulbIcon from './../../Icons/LightbulbIcon'

export default {
  components: {
    LightbulbIcon,
  }
}
</script>

<style lang="scss">
.header-section {
  background-color: #0A0E14;

  .header-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      height: 50vh;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .header-box {
    margin: 3rem auto 0 auto;
    order: 2;
    text-align: center;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    @media (min-width: 768px) {
      order: 1;
      width: 40%;
      margin: 0;
      text-align: left;
    }
  }

  .title {
    margin-bottom: 2rem;
  }

  .subtitle {
    text-align: justify;
    line-height: 180%;
  }

  .animation-box {
    order: 1;
    display: flex;
    flex-wrap: wrap;
    width: calc(45px + 9rem);
    margin: 1.5rem auto 0 auto;

    @media (min-width: 768px) {
      margin: 0;
    }

    div {
      width: 15px;
      height: 15px;
      border-radius: 100%;
      background: rgb(16, 21, 30);
      margin: 1.5rem;
    }

    @for $i from 1 through 4 {
      div:nth-child(#{$i}) {
        /* animation: lightUp 3s infinite ease-in-out; */
      }
    }

    @media (min-width: 768px) {
      order: 2;
    }
  }
}

@keyframes lightUp {
  0% {
    background: rgb(16, 21, 30);
  }
  20% {
    background: rgb(53, 117, 156);
  }
  40% {
    background: rgb(16, 21, 30);
  }
  100% {
    background: rgb(16, 21, 30);
  }
}
</style>
