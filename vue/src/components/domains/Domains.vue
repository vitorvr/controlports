<template>
  <div>
    <div class="my-1 row">
      <div class="col-6">
        <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
          <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
          </b-form-select>
        </b-form-fieldset>
      </div>
      <div class="col-6">
        <b-form-fieldset horizontal label="Filter" :label-cols="3">
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>
    <div class="justify-content-center my-1">
      <b-pagination size="md" :total-rows="domains.length" :per-page="perPage" v-model="currentPage" />
    </div>
    <b-table striped hover :items="domains" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domains: [],
      fields: {
        id: {
          label: 'ID',
          sortable: true
        },
        domain_name: {
          label: 'Domain',
          sortable: true
        },
        environment: {
          label: 'Environment',
          sortable: true
        }
      },
      currentPage: 1,
      perPage: 5,
      filter: null
    }
  },
  created() {
    this.getDomains();
  },
  methods: {
    getDomains: function () {
      this.$http.get('http://localhost:3000/api/domains').then((res) => {
        this.domains = res.body.domains;
      });
    }
  }
}
</script>

<style>

</style>
