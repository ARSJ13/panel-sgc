<template>
  <div id="app">
    <Header />
    <div class="container-app">
      <Dcc id="Dcc"/>
      <Tjdft id="Tjdft"/>
      <Statistics id="Statistics"/>
      <Procedimentos id="Procedimentos"/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  import Dcc from '@/components/Dcc'
  import Tjdft from '@/components/Tjdft'
  import Statistics from '@/components/Statistics'
  import Procedimentos from '@/components/Procedimentos'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Dcc,
    Tjdft,
    Statistics,
    Procedimentos
  }

}
</script>

<style>
  *{
   font-family: 'Montserrat', sans-serif;
   text-transform: uppercase;
   font-size: 20px;
  }
  div.container-app > #Dcc{
    grid-area: a;
  }
  div.container-app > #Tjdft{
    grid-area: b;
  }
  div.container-app > #Statistics{
    grid-area: c;
  }
  div.container-app > #Procedimentos{
    grid-area: d;
    grid-column: 1 / 4;
  }
  div.container-app{
    width: 96%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 30% 30% 1fr;
    grid-template-rows: 60% 40%;
    grid-template-areas: 
    'a b c'
    'd d d';
  } 
</style>
