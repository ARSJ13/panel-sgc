<template>
  <div id="app">
    <Header />
    <div class="container-app">
      <Dcc id="Dcc"/>
      <Tjdft id="Tjdft"/>
      <Statistics id="Statistics"/>
      <Procedimentos v-if="tipo" :tipo='tipo' id="Procedimentos"/>
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
  },
  data() {
    return {
      tipo: ''
    }
  },
  created(){
    this.tipoUpdate(),
    setInterval(() => {
      this.lastUpdate(1),
      this.lastUpdate(2),
      this.lastUpdate(3),
      this.lastUpdate(4),
      this.lastUpdate(10),
      this.lastUpdate(11),
  
      this.totalUpdate(1),
      this.totalUpdate(2),
      this.totalUpdate(3),
      this.totalUpdate(4),
      this.totalUpdate(10),
      this.totalUpdate(11)
    }, 10000)
  },
  methods: {
    async tipoUpdate(){
      try {
        const data = await this.$http.get('http://localhost:4567/procedimentos-tipo/')
        .then(res => {
          this.tipo = res.data;
        })
        return data
      } catch (error) {
        console.error('Error: ', error);
      }
    },
    async lastUpdate(id){
      const data = await this.$http.get(`http://localhost:4567/procedimentos-last/${id}`)
        .then(res => {
          const response = res.data[0]["MAX(created_at)"];
          const date = new Date(response).toLocaleString();
          
          switch (id) {
            case 1:
              this.$store.commit('pipLast', date);
            break;
            case 2:
              this.$store.commit('maLast', date);
            break;
            case 3:
              this.$store.commit('sindLast', date);
            break;
            case 4:
              this.$store.commit('ipmLast', date);
            break;
            case 10:
              this.$store.commit('itLast', date);
            break;
            case 11:
              this.$store.commit('tceLast', date);
            break;
            default:
              console.log('O id informado não se aplica a está api!');
            break;
          }

          return date
        })
      return data 
    },
    async totalUpdate(id){
      const data = await this.$http.get(`http://localhost:4567/procedimentos-qtd/${id}`)
        .then(res => {
          const response = res.data[0]["COUNT(*)"];
          
          switch (id) {
            case 1:
              this.$store.commit('pipTotal', response);
            break;
            case 2:
              this.$store.commit('maTotal', response);
            break;
            case 3:
              this.$store.commit('sindTotal', response);
            break;
            case 4:
              this.$store.commit('ipmTotal', response);
            break;
            case 10:
              this.$store.commit('itTotal', response);
            break;
            case 11:
              this.$store.commit('tceTotal', response);
            break;
            default:
              console.log('O id informado não se aplica a está api!');
            break;
          }

          return response
        })
      return data 
    }
  },

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
