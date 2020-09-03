import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dcc: {
      data: {
        sgc: {
          data: {status: ''},
          status: ''
        },
        pje: {
          data: {status: ''},
          status: ''
        }
      }
    },
    tjdft: {
      data: {
        interConsulta: {
          statusText: '',
          status: ''
        },
        interEscrita: {
          statusText: '',
          status: ''
        },
        pjeConsulta: {
          statusText: '',
          status: ''
        },
        pjeGat: {
          data: {status: ''},
          status: ''
        },
        pjeInt: {
          data: {status: ''},
          status: ''
        }
      }
    },
    qtd : {
      pip: {
        last: '',
        total: ''
      },
      ma: {
        last: '',
        total: ''
      },
      sind: {
        last: '',
        total: ''
      },
      ipm: {
        last: '',
        total: ''
      },
      it: {
        last: '',
        total: ''
      },
      tce: {
        last: '',
        total: ''
      }
    }
  },
  mutations: {
    updateSgc(state, data){
      state.dcc.data.sgc = data
    },
    updatePje(state, data){
      state.dcc.data.pje = data
    },
    updateInterConsulta(state, data){
      state.tjdft.data.interConsulta = data
    },
    updateInterEscrita(state, data){
      state.tjdft.data.interEscrita = data
    },
    updatePjeConsulta(state, data){
      state.tjdft.data.pjeConsulta = data
    },
    updatePjeGat(state, data){
      state.tjdft.data.pjeGat = data
    },
    updatePjeInt(state, data){
      state.tjdft.data.pjeInt = data
    },

    errorSgc(state){
      state.dcc.data.sgc.data.status = 'Error'
      state.dcc.data.sgc.status = 'Error'
    },
    errorPje(state){
      state.dcc.data.pje.data.status = 'Error'
      state.dcc.data.pje.status = 'Error'
    },
    errorInterConsulta(state){
      state.tjdft.data.interConsulta.statusText = 'Error'
      state.tjdft.data.interConsulta.status = 'Error'
    },
    errorInterEscrita(state){
      state.tjdft.data.interEscrita.statusText = 'Error'
      state.tjdft.data.interEscrita.status = 'Error'
    },
    errorPjeConsulta(state){
      state.tjdft.data.pjeConsulta.statusText = 'Error'
      state.tjdft.data.pjeConsulta.status = 'Error'
    },
    errorPjeGat(state){
      state.tjdft.data.pjeGat.data.status = 'Error'
      state.tjdft.data.pjeGat.status = 'Error'
    },
    errorPjeInt(state){
      state.tjdft.data.pjeInt.data.status = 'Error'
      state.tjdft.data.pjeInt.status = 'Error'
    },

    pipLast(state, data){
      state.qtd.pip.last = data
    },
    pipTotal(state, data){
      state.qtd.pip.total = data
    },
    maLast(state, data){
      state.qtd.ma.last = data
    },
    maTotal(state, data){
      state.qtd.ma.total = data
    },
    sindLast(state, data){
      state.qtd.sind.last = data
    },
    sindTotal(state, data){
      state.qtd.sind.total = data
    },
    ipmLast(state, data){
      state.qtd.ipm.last = data
    },
    ipmTotal(state, data){
      state.qtd.ipm.total = data
    },
    itLast(state, data){
      state.qtd.it.last = data
    },
    itTotal(state, data){
      state.qtd.it.total = data
    },
    tceLast(state, data){
      state.qtd.tce.last = data
    },
    tceTotal(state, data){
      state.qtd.tce.total = data
    }
  }
})
export default store
