<template>
  <b-navbar toggleable type="inverse" variant="inverse">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-link class="navbar-brand" to="#">
      <span>Control Ports</span>
    </b-link>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item>
          <router-link to="/environments" class="nav-link" activeClass="active">Environments</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/domains" class="nav-link" activeClass="active">Domains</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/interfaces" class="nav-link" activeClass="active">Interfaces</router-link>
        </b-nav-item>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
.nav-link {
  display: block;
  padding: 0.3em 1em;
}
</style>
