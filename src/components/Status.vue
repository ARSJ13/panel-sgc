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
          <td :class="{statusE: statusError}"> {{ apiData.sgc }} </td>
          <td :class="{statusE: statusError}"> {{ apiStatus.sgc }} </td>
        </tr>
        <tr>
          <td> PJE </td>
          <td :class="{statusE: statusError}"> {{apiData.pje}} </td>
          <td :class="{statusE: statusError}"> {{apiStatus.pje}} </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Status',
  data() {
    return {
      url: {
        sgc: '',
        pje: ''
      },
      apiData: {
        sgc: '',
        pje: ''
      },
      apiStatus: {
        sgc: '',
        pje: ''
      },
      statusError: true
    }
  },
  methods: {
    UpdatePje(){
      setInterval( async () => {
        this.url.pje = await this.$http.get('https://pje-ead-gateway.tjdft.jus.br/actuator/health')
          .then((res) =>{
            this.apiData.pje = res.data.status
            this.apiStatus.pje = res.status
            console.log('success')
          })
          .catch(error => {
            console.error(error)
            this.$toasted.global.defaultError();
            let errorSgc = this.apiData.sgc
            if(errorSgc != 'UP'){
              console.log(errorSgc)
              this.statusError = true;
            }
            if(this.apiStatus.pje !== '200'){
              this.statusError = true;
            }
          })
      }, 5000)
    }
  },
  mounted() {
    this.UpdatePje()
  }
}
</script>

<style>
.statusE{
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
  height: 30vh;
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
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
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