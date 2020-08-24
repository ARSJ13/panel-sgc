<template>
  <div>
    <b-calendar :readonly="readonly"></b-calendar>
  </div>
</template>

<script>
  export default {
    name: 'Data',
    data() {
      return {
        state: 'readonly'
      }
    },
    computed: {
      disabled() {
        return this.state === 'disabled'
      },
      readonly() {
        return this.state === 'readonly'
      }
    },
    mounted(){
      setInterval( () => {
        this.readonly()
      }, 5000)
    }
  }
</script>