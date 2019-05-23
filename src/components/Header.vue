<template>
  <div class="bd-example">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/users">Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"  to="/users/list">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users/list" @click.native="logOut()">LogOut</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

</div>
</template>

<script>


export default {
  name: 'Header',
  props: {
   
  },
  methods:{
    logOut(){
      localStorage.removeItem("token")
       this.$router.push({ path: '/' })

    }
  }
}
</script>


<style>
  a {
    padding:5px;
  }
</style>
