<template>
  <div class="view-tjdft">
    <h2 class="title-tjdft">Status das APIs do TJDFT</h2>
    <div class="container-tjdft">
      <table class="table-tjdft">
        <tr>
          <th>API</th>
          <th>Status</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>Intercomunicação<br/>Consulta</td>
          <td :class="status.interConsulta"> {{ interConsulta.statusText ? interConsulta.statusText : status.interConsulta }} </td>
          <td :class="status.interConsulta"> {{ interConsulta.status }} </td>
        </tr>
        <tr>
          <td>Intercomunicação<br/>Escrita</td>
          <td :class="status.interEscrita"> {{ interEscrita.statusText ? interEscrita.statusText : status.interEscrita }} </td>
          <td :class="status.interEscrita"> {{ interEscrita.status }} </td>
        </tr>
        <tr>
          <td>Consulta PJE</td>
          <td :class="status.pjeConsulta"> {{ pjeConsulta.statusText ? pjeConsulta.statusText : status.pjeConsulta }} </td>
          <td :class="status.pjeConsulta"> {{ pjeConsulta.status }} </td>
        </tr>
        <tr>
          <td>PJE Gateway</td>
          <td :class="status.pjeGat"> {{ pjeGat.data.status ? pjeGat.data.status : status.pjeGat }} </td>
          <td :class="status.pjeGat"> {{ pjeGat.status }} </td>
        </tr>
        <tr>
          <td>PJE Integração</td>
          <td :class="status.pjeInt"> {{ pjeInt.data.status ? pjeInt.data.status : status.pjeInt }} </td>
          <td :class="status.pjeInt"> {{ pjeInt.status }} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Tjdft',
  data() {
    return {
      status : {
        interConsulta : 'loading',
        interEscrita : 'loading',
        pjeConsulta : 'loading',
        pjeGat : 'loading',
        pjeInt : 'loading'
      }
    }
  },
  computed: {
    ...mapState({
      interConsulta: state => state.tjdft.data.interConsulta,
      interEscrita: state => state.tjdft.data.interEscrita,
      pjeConsulta: state => state.tjdft.data.pjeConsulta,
      pjeGat: state => state.tjdft.data.pjeGat,
      pjeInt: state => state.tjdft.data.pjeInt,
    }),
    ...mapMutations({})
  },
  methods: {
    updateInterConsulta(){
        const response = this.$http.get('http://localhost:4567/inter-consulta/')
          .then((res) =>{
            this.$store.commit('updateInterConsulta', res)
            // console.log(res)
            this.status.interConsulta = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.interConsulta = 'error'
            this.$store.commit('errorInterConsulta')
          })
        return response 
    },
    updateInterEscrita(){
        const response = this.$http.get('http://localhost:4567/inter-escrita/')
          .then((res) =>{
            this.$store.commit('updateInterEscrita', res)
            // console.log(res)
            this.status.interEscrita = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.interEscrita = 'error'
            this.$store.commit('errorInterEscrita')
          })
        return response 
    },
    updatePjeConsulta(){
        const response = this.$http.get('http://localhost:4567/pje-consulta/')
          .then((res) =>{
            this.$store.commit('updatePjeConsulta', res)
            // console.log(res)
          this.status.pjeConsulta = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.pjeConsulta = 'error'
            this.$store.commit('errorPjeConsulta')
          })
        return response 
    },
    updatePjeGat(){
        const response = this.$http.get('https://pje-ead-gateway.tjdft.jus.br/actuator/health')
          .then((res) =>{
            this.$store.commit('updatePjeGat', res)
            // console.log(res)
          this.status.pjeGat = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.pjeGat = 'error'
            this.$store.commit('errorPjeGat')
          })
        return response 
    },
    updatePjeInt(){
        const response = this.$http.get('http://localhost:4567/pje-integracao/')
          .then((res) =>{
            this.$store.commit('updatePjeInt', res)
            // console.log(res)
         this.status.pjeInt = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.pjeInt = 'error'
            this.$store.commit('errorPjeInt')
          })
        return response 
    },
  },
  mounted() {
    setInterval( () =>{
     this.updateInterConsulta(),
     this.updateInterEscrita(),
     this.updatePjeConsulta(),
     this.updatePjeGat(),
     this.updatePjeInt()
    }, 1000)
  }
}
</script>

<style>
.loading{
  font-size: 2rem;
  font-weight: bold;
  color: chocolate;
}
.error{
  color: red;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.7);
}

.success{
  animation: success 4s infinite alternate;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 255, 0, 0.3);
}
@keyframes success{
  from {color: green; }
  to {color: lightgreen; }
}
.view-tjdft{
  box-sizing: border-box;
  width: 90%;
  height: 95%;
  max-width: 500px;
  max-height: 500px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);

}
.title-tjdft{
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  padding: 12px;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-image: linear-gradient(darkblue, blue);
  text-align: center;
}
.container-tjdft{
  width: 90%;
}
.table-tjdft{
  width: 100%;
  box-sizing: border-box;
}
.table-tjdft th, td{
  padding: 8px;
  text-align: center;
}
.table-tjdft th{
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
}
.table-tjdft tr:nth-last-child(n+2){
  border-bottom: 2px solid rgba(0, 0, 255, 0.2);
}
.table-tjdft td:nth-child(1){
  font-weight: bold;
  color: rgba(0, 0, 255, 0.8);
  text-shadow: 1px 2px 3px rgba(0, 0, 255, 0.2);
}


</style>