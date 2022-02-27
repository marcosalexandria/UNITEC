<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
export default {
  components:{
    Nav,
    Footer
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
</style>