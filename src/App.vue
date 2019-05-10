<template>
<div id="app" >
<div class="bd-example">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Home</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active" >
        <router-link class="navbar-link" to="/adduser">AddUser<span class="sr-only">(current)</span></router-link>
 
      </li>
      <li class="nav-item active">
        <router-link class="navbar-link" to="/users">Users</router-link>
      </li>
     
   
    </ul>

  </div>
</nav>
</div>
  <div class="container" style="padding-top:30px;">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {

  },
  data() {
    return {
   
    };
  }
};
</script>
<style>
  a {
    padding:5px;
  }
</style>

