<template>
    <header class="header">
      <div class='boxTitle'>
        <img src="@/assets/logo-pmdf.png" alt="logo da PMDF">
        <h1 class="title"></h1>
      </div>
    </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible ? 'fa-angle-down' : 'fa-angle-left'
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu');
      console.log(this.$store.state.isMenuVisible)
    }
  }
}
</script>

<style>
  .header{
    grid-area: header;
    background: linear-gradient(blue, darkblue);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxTitle{
    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;

  }
  .title{
    color: #efefef;
    font-size: 1.2rem;
    font-weight: 100;
    text-align: center;
    margin-left: 1rem;
  }
  .title a{
    text-decoration: none;
    color: #efefef;
  }
  .title a:hover{
    text-decoration: none;
    color: #efefef;
  }
  header.header > a.toggle{
    width: 60px;
    height: 100%;
    justify-self: flex-start;
    text-decoration: none;


    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms;
  }
  img{
    width: 100px;
    padding: 4px;
  }
</style>