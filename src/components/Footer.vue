<template>
  <footer class="footer">
    <span>Copyright © <strong> DIC/STIC </strong>  2020</span>
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

    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.5) ;
  }
  .footer>span{
    margin: auto 0;
  }

</style>