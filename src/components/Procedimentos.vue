<template>
 <div class="view-procedimento">
    <h2 class="title-procedimento">Procedimentos em trâmite no SGC</h2>
    <div class="container-procedimento">
      <table class="table-procedimento">
        <tr>
          <th>Sigla</th>
          <th>Última inclusão</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{{tipo[0].sigla}}</td>
          <td >{{pipLast}}</td>
          <td >{{pipTotal}}</td>
        </tr>
         <tr>
          <td>{{tipo[1].sigla}}</td>
          <td >{{maLast}}</td>
          <td >{{maTotal}}</td>
        </tr>
      </table>
      <table class="table-procedimento">
        <tr>
          <th>Sigla</th>
          <th>Última inclusão</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{{tipo[2].sigla}}</td>
          <td>{{sindLast}}</td>
          <td>{{sindTotal}}</td>
        </tr>
         <tr>
          <td>{{tipo[3].sigla}}</td>
          <td >{{ipmLast}}</td>
          <td >{{ipmTotal}}</td>
        </tr>
      </table>
      <table class="table-procedimento">
        <tr>
          <th>Sigla</th>
          <th>Última inclusão</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{{tipo[9].sigla}}</td>
          <td >{{itLast}}</td>
          <td >{{itTotal}}</td>
        </tr>
         <tr>
          <td>{{tipo[10].sigla}}</td>
          <td >{{tceLast}}</td>
          <td >{{tceTotal}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return {
      tipo : ''
    }
  },
  computed: {
    ...mapState ({
      pipLast : state => state.qtd.pip.last,
      pipTotal : state => state.qtd.pip.total,
      maLast : state => state.qtd.ma.last,
      maTotal : state => state.qtd.ma.total,
      sindLast : state => state.qtd.sind.last,
      sindTotal : state => state.qtd.sind.total,
      ipmLast : state => state.qtd.ipm.last,
      ipmTotal : state => state.qtd.ipm.total,
      itLast : state => state.qtd.it.last,
      itTotal : state => state.qtd.it.total,
      tceLast : state => state.qtd.tce.last,
      tceTotal : state => state.qtd.tce.total,
    }),
    ...mapMutations({})
  },
  methods: {
    tipoUpdate(){
      try {
        const data = this.$http.get('http://localhost:4567/procedimentos-tipo/')
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
  mounted(){
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
  }
}
</script>

<style>
.view-procedimento{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.title-procedimento{
  position: absolute;
  top: 0;
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
.container-procedimento{
  width: 96%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.table-procedimento{
  width: 30%;
  box-sizing: border-box;
}
.table-procedimento th, td{
  padding: 8px;
  text-align: center;
  font-weight: bold;
}
.table-procedimento th{
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 200, 0.1);
}
.table-procedimento tr:nth-last-child(n+2){
  border-bottom: 2px solid rgba(0, 0, 255, 0.3);
}
.table-procedimento td:nth-last-child(n+3){
  font-weight: bold;
  color: rgba(0, 0, 255, 0.8);
  text-shadow: 1px 2px 3px rgba(0, 0, 255, 0.3);
}
</style>