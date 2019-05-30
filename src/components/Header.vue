<template>
  <div class="bd-example">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <!--<a class="navbar-brand" href="#">Start Bootstrap</a> -->

              <router-link class="nav-link" to="/users">
                Home
                <span class="sr-only">(current)</span>
              </router-link>


              <router-link class="nav-link" to="/users/list">Users</router-link>


              <router-link class="nav-link" to="/products">AddProduct</router-link>


              <router-link class="nav-link" to="/products/productList">Products</router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
           
             <li class="nav-item">
              <router-link class="nav-link" to="">{{UserName}}</router-link>
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
import axios from "axios";
import { API_PATH } from "../config/path.js";

export default {
  name: "Header",
  props: {},
  created() {
    this.getUserClaims();
  },
 data() {
    return {
      UserName: ""
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("roles");
      this.$router.push({ path: "/" });
    },
    getUserClaims() {
        return axios
        .get(`${API_PATH}/jwt`)
        .then(response => response.data)
        .then(data => {   
          this.UserName=data.userName;
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log(error);
          /* eslint-disable no-console */
        });
    }
  }
};
</script>


<style>
a:hover,a:link,a:active,a:visited {
  padding: 5px;
  color:white;
}
.navbar-dark .navbar-nav .nav-link{
  color:white;
}

</style>
