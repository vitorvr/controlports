<template>
  <div>
    <div class="my-1 row">
      <div class="col-6">
        <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
          <b-form-select :options="[{text:10,value:10},{text:25,value:25},{text:50,value:50}]" v-model="perPage">
          </b-form-select>
        </b-form-fieldset>
      </div>
      <div class="col-6">
        <b-form-fieldset horizontal label="Filter" :label-cols="3">
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>
  
    <b-table striped hover :items="interfaces" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    </b-table>
  
    <div class="justify-content-center my-1">
      <b-pagination size="md" :total-rows="interfaces.length" :per-page="perPage" v-model="currentPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      interfaces: [],
      fields: {
        interface_id: {
          label: 'Interface ID',
          sortable: true
        },
        global_id: {
          label: 'Global ID',
          sortable: true
        },
        package: {
          label: 'Package',
          sortable: true
        },
        port: {
          label: 'Port',
          sortable: true
        },
        domain: {
          label: 'Domain',
          sortable: true
        },
        environment: {
          label: 'Environment',
          sortable: true
        },
        description: {
          label: 'Description',
          sortable: true
        }
      },
      currentPage: 1,
      perPage: 10,
      filter: null
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
