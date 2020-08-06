<template>
  <table>
    <tr>
      <th>API</th>
      <th>Status</th>
      <th>Code</th>
    </tr>
    <tr>
      <td> SGC </td>
      <td> {{ apiData }} </td>
      <td> {{ apiStatus }} </td>
    </tr>
    <tr>
      <td> PJE </td>
      <td> {{apiData.pje}} </td>
      <td> {{apiStatus.pje}} </td>
    </tr>
  </table>
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
            
            if(this.apiData != 'UP'){
              this.styleData = true;
            }
            if(this.styleStatus != 200){
              this.styleStatus = true;
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

</style>