<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Domain</th>
          <th>Environment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="domain in domains">
          <th>{{ domain.id }}</th>
          <th>{{ domain.domain_name }}</th>
          <th>{{ domain.environment }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domains: []
    }
  },
  created() {
    this.getDomains();
  },
  methods: {
    getDomains: function(){
      this.$http.get('http://localhost:3000/api/domains').then((res) => {
        this.domains = res.body.domains;
      });
    }
  }
}
</script>

<style>

</style>
