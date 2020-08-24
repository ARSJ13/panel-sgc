<template>
  <div id="app">
    <Header />
    <div class="container-app">
      <Dcc />
      <Tjdft />
      <!-- <Data /> -->
      <Statistics />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  import Dcc from '@/components/Dcc'
  import Tjdft from '@/components/Tjdft'
  // import Data from '@/components/Date'
  import Statistics from '@/components/Statistics'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dcc,
    Tjdft,
    // Data,
    Statistics
  }

}
</script>

<style>
  div.container-app{
    width: 96%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 30% 1fr;
    grid-template-rows: 60% 40%;
    grid-template-areas: 
    "a b c"
    "d d d"
    ;
  }
  div.container-app > Dcc{
    display: grid;
    grid-area: a;
  }
  div.container-app > Tjdft{
    display: grid;
    grid-area: b;
  }
  div.container-app > Data{
    display: grid;
    grid-area: c;
  }
  div.container-app > Statistics{
    display: grid;
    grid-area: d;
  } 
</style>
