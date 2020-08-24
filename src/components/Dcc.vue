<template>
  <div class="view-dcc">
    <h2 class="title-dcc">Status das APIs do DCC</h2>
    <div class="container-dcc">
      <table class="table-dcc">
        <tr>
          <th>API</th>
          <th>Status</th>
          <th>Code</th>
        </tr>
        <tr>
          <td> SGC </td>
          <td :class="status.sgc">{{ sgc.data.status ? sgc.data.status : status.sgc }}</td>
          <td :class="status.sgc">{{ sgc.status }}</td>
        </tr>
        <tr>
          <td> PJE </td>
          <td :class="status.pje"> {{ pje.data.status ? pje.data.status : status.pje }} </td>
          <td :class="status.pje"> {{ pje.status }} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Dcc',
  data(){
    return {
      status: {
        sgc: 'loading',
        pje: 'loading'
      }
    }
  },
  computed: {
    ...mapState ({
      sgc: state => state.dcc.data.sgc,
      pje: state => state.dcc.data.pje
    }),
    ...mapMutations({})
  },
  methods: {
    updateSgc(){
        const response = this.$http.get('http://localhost:4567/sgc/')
          .then((res) =>{
            this.$store.commit('updateSgc', res)
            this.status.sgc = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.sgc = 'error'
            this.$store.commit('errorSgc')
          })
        return response 
    },
    updatePje(){
        const response = this.$http.get('http://localhost:4567/pje/')
          .then((res) =>{
            this.$store.commit('updatePje', res)
            this.status.pje = 'success'
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError()
            this.status.pje = 'error'
            this.$store.commit('errorPje')
          })
        return response 
    }
  },
  mounted() {
    setInterval( () => {
      this.updateSgc(),
      this.updatePje()
    }, 5000)
  }
}
</script>

<style scoped>
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
.view-dcc{
  width: 30vw;
  max-width: 500px;
  max-height: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);

}
.title-dcc{
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
.container-dcc{
  width: 90%;
}
.table-dcc{
  width: 100%;
}
.table-dcc th, td{
  padding: 8px;
  text-align: center;
}
.table-dcc th{
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
}
.table-dcc tr:nth-last-child(n+2){
  border-bottom: 2px solid rgba(0, 0, 255, 0.2);
}
.table-dcc td:nth-child(1){
  font-weight: bold;
  color: rgba(0, 0, 255, 0.8);
  text-shadow: 1px 2px 3px rgba(0, 0, 255, 0.2);
}


</style>