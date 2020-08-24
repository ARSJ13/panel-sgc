import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 2000,
  theme: 'bubble',
  className: 'error',
  singleton: false
})

Vue.toasted.register(
  'defaultSuccess', 'Operação realizada com sucesso!',
  { type: 'success', icon: 'check'}
)

Vue.toasted.register(
  'defaultError', 'Status code error!',
  { type: 'error', icon: 'times', action: { class: 'error'}}
)
