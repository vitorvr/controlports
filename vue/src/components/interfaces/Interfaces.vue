<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Interface ID</th>
          <th>Global ID</th>
          <th>Package</th>
          <th>Port</th>  
          <th>Domain</th>  
          <th>Environment</th>  
          <th>Description</th>  
        </tr>
      </thead>
      <tbody>
        <tr v-for="int in interfaces">
          <th>{{ int.interface_id }}</th>
          <th>{{ int.global_id }}</th>
          <th>{{ int.package }}</th>
          <th>{{ int.port }}</th>
          <th>{{ int.domain }}</th>
          <th>{{ int.environment }}</th>
          <th>{{ int.description }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interfaces: []
    }
  },
  created() {
    this.getInterfaces();
  },
  methods: {
    getInterfaces: function () {
      this.$http.get('http://localhost:3000/api/interfaces').then((res) => {
        this.interfaces = res.body.interfaces;
      });
    }
  }
}
</script>

<style>

</style>
