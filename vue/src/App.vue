<template>
  <div id="app">
    <Navbar></Navbar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './components/navbar/Navbar.vue'
import Environments from './components/environments/Environments.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Environments

  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
