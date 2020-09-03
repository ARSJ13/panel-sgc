<template>
  <div class="view-statistic">
    <h2 class="title-statistic">Execuções das rotinas de atualizações do SGC</h2>
    <div class="container-statistic">
      <table class="table-statistic">
        <tr>
          <th>step</th>
          <th>Status</th>
          <th>Atualizados</th>
          <th>Data</th>
        </tr>
        <tr>
          <td>{{api[0].step ? 'Unidades' : error.status }}</td>
          <td :class="style">{{api[0].status}}</td>
          <td class="normal">{{api[0].qtdAtualizados}}</td>
          <td class="normal">{{date(0)}}</td>
        </tr>
        <tr>
          <td>{{api[1].step ? 'Novos policiais' : error.status }}</td>
          <td :class="style">{{api[1].status}}</td>
          <td class="normal">{{api[1].qtdAtualizados}}</td>
          <td class="normal">{{date(1)}}</td>
        </tr>
        <tr>
          <td>{{api[2].step ? 'Posto / Graduação' : error.status }}</td>
          <td :class="style">{{api[2].status}}</td>
          <td class="normal">{{api[2].qtdAtualizados}}</td>
          <td class="normal">{{date(2)}}</td>
        </tr>
        <tr>
          <td>{{api[3].step ? 'Unidade do policial' : error.status }}</td>
          <td :class="style">{{api[3].status}}</td>
          <td class="normal">{{api[3].qtdAtualizados}}</td>
          <td class="normal">{{date(3)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      api: '',
      style: ''
    }
  },
  methods: {
    apiUpdate(){
      try {
        const data = this.$http.get('http://localhost:4567/estatisticas/')
        .then( res => {
          this.api = res.data;
          this.style = "success";
        })
        return data
      } catch (error) {
        console.error(error);
        this.style = 'error';
      }
    },
    date(index){
      const data = this.api[index].dataTermino;
      const date = new Date(data);
      return date.toLocaleString()
    }
  },
  mounted(){
    setInterval( () =>{
      this.apiUpdate()
    }, 5000)
  }
  
}
</script>
<style scope>
.success{
  color: green;
  font-weight: bold;
  font-size: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 255, 0, 0.3);
}
.error{
  color: red;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.7);
}
.normal{
  font-weight: bold;
}

.view-statistic{
  box-sizing: border-box;
  width: 100%;
  height: 95%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

}
.title-statistic{
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
.container-statistic{
  width: 90%;
}
.table-statistic{
  width: 100%;
  box-sizing: border-box;
}
.table-statistic th, td{
  padding: 8px;
  text-align: center;
}
.table-statistic th{
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 200, 0.1);
}
.table-statistic tr:nth-last-child(n+2){
  border-bottom: 2px solid rgba(0, 0, 255, 0.2);
}
.table-statistic td:nth-child(1){
  font-weight: bold;
  color: rgba(0, 0, 255, 0.8);
  text-shadow: 1px 2px 3px rgba(0, 0, 255, 0.2);
}
</style>