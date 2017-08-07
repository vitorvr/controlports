<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Environment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="env in environments">
          <th>{{ env.id }}</th>
          <th>{{ env.environment_name }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      environments: [],
    }
  },
  created() {
    this.getEnvironments();
  },
  methods: {
    getEnvironments: function () {
      this.$http.get('http://localhost:3000/api/environments').then((res) => {
        this.environments = res.body.environments;
      });
    }
  }
}
</script>

<style>

</style>
