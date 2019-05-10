
<template>

 

    <tr>
      <th scope="row">{{user.id}}</th>
      <td>{{user.userName}}</td>
      <td>{{user.password}}</td>
      <td>{{user.email}}</td>
      <td><router-link :to="{name:'usersEdit', params: {id: user.id } }">Edit</router-link></td>
      <td><router-link :to="{}" @click.native="deleteUser(user.id)">Delete</router-link></td>
    </tr>


</template>

<script>
import { API_PATH } from "../config/path.js";
import axios from "axios";
export default {
  name: "UserItem",
  props: {
    user:{
      type:Object,
      required:true
    },
    getUsers:{
      type:Function,
      required:true  
    }
  },
  methods:{
    deleteUser(id)
      {
         /* eslint-disable no-console */
          console.log(id);
          /* eslint-disable no-console */
           axios
          .delete(`${API_PATH}/users/${id}`)
          .then(data => {
            /* eslint-disable no-console */
            console.log(data);
            this.getUsers();
            /* eslint-disable no-console */
          })
          .catch(err => {
            /* eslint-disable no-console */
            console.log("hata", err);
            /* eslint-disable no-console */
          });
      }
  }
};
</script>

<style>
</style>