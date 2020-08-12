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
    }
  }
</script>