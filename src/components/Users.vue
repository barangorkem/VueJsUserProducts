
<template>
  <div>
    <h4>Users</h4>
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">UserName</th>
          <th scope="col">Password</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      
        <UserItem v-bind:getUsers="getUsers" v-bind:user="user" v-bind:key="user.id" v-for="user in users"/>
     
      </tbody>
    </table>
  </div>
</template>
 
<script>
import UserItem from "./UserItem.vue";
import { API_PATH } from "../config/path.js";
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  components: {
    UserItem
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      return axios
        .get(`${API_PATH}/users`)
        .then(response => response.data)
        .then(data => {
          /* eslint-disable no-console */
          console.log(data);
          /* eslint-disable no-console */
          this.users = data;
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
</style>