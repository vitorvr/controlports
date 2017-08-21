<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand>
      <router-link to="/" class="navbar-brand" activeClass="active">Control Ports</router-link>
    </b-navbar-brand>
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
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
.nav-link {
  padding: 0.3em 1em;
}
</style>
