<template>
  <div id="app">
    <Header />
    <div class="container-app">
      <Dcc />
      <Tjdft />
      <Data />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  import Dcc from '@/components/Dcc'
  import Tjdft from '@/components/Tjdft'
  import Data from '@/components/Date'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dcc,
    Tjdft,
    Data
  }

}
</script>

<style>
.container-app{
  width: 96%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 25%;
  grid-template-rows: 60% 40%;
  flex-wrap: wrap;
}
.container-app>Dcc{
  grid-area: Dcc;
}
.container-app>Tjdft{
  grid-area: Tjdft;
}
.container-app>Data{
  grid-area: Data;
}
</style>
