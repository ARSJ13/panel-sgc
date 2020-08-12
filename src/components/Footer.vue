<template>
  <footer class="footer">
    <span>Copyright <strong> DIC/STIC </strong> © 2020</span>
  </footer>
</template>

<script>
export default {

  name: 'Footer'
  
}
</script>

<style>
  .footer{
    grid-area: footer;
    background-color: darkblue;
    color: #f3f3f3;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }
  .footer>span{
    margin: auto 0;
  }

</style>