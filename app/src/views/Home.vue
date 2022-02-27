<template>
  <div class="home">
    <Carrosel/>
    <RedesSociais/>
    <Main/>
  </div>
</template>

<script>
  import Carrosel from '../components/Carrosel.vue'
  import RedesSociais from '../components/RedesSociais.vue'
  import Main from '../components/Main.vue'
export default {
  name: 'Home',
  components: {
    Carrosel,
    RedesSociais,
    Main
  }
}
</script>