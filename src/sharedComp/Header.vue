<template>
  <div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Authenticate YourSelf</router-link>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right">
          <router-link to="/signup" activeClass="active" tag="li"><a>Sign Up</a></router-link>
          <router-link to="/signIn" activeClass="active" tag="li"><a>Sign In</a></router-link>
          <router-link to="/dashboard" activeClass="active" tag="li"><a>Dashboard</a></router-link>
          <router-link to="/logout" activeClass="active" tag="li"><a>Logout</a></router-link>
          </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>