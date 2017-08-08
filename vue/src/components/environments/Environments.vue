<template>
  <div class="row main-class">
    <div class="col-6">
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
        <b-pagination size="md" :total-rows="environments.length" :per-page="perPage" v-model="currentPage" />
      </div>
      <b-table bordered striped hover :items="environments" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter" @row-clicked="log" />
    </div>
    <div class="col-4">
      <b-form-input type="text" placeholder="Enter your name" v-model="id"></b-form-input>
      <b-form-input type="text" placeholder="Enter your name" v-model="env"></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      environments: [],
      fields: {
        id: {
          label: 'ID',
          sortable: true
        },
        environment_name: {
          label: 'Environment',
          sortable: true
        }
      },
      currentPage: 1,
      perPage: 5,
      filter: null,
      id: '',
      env: ''
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
    },
    log: function (record, index) {
      this.id = record.id;
      this.env = record.environment_name;
    }
  }
}
</script>

<style>
.main-class {
  padding: 40px;
}
</style>
