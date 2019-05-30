<template>
  <div>
    <h1>Login User</h1><br/>
    <form @submit.prevent="loginUser">
      <div class="form-row">
        <div class="col">
          <input
            name="UserName"
            type="text"
            class="form-control"
            v-validate="'required'"
            v-model="users.UserName"
            placeholder="Username"
          >
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('UserName')"
          >{{errors.first('UserName')}}</div>
        </div>
     
      </div>
      <br/>
      <div class="row">
         <div class="col">
          <input
            name="Password"
            type="text"
            class="form-control"
            v-validate="'required'"
            v-model="users.Password"
            placeholder="Password"
          >
          <div
            class="helo block alert alert-danger"
            v-show="errors.has('Password')"
          >{{errors.first('Password')}}</div>
        </div>
      </div>
      <br>
      <br>
      <button type="submit" style="float:right;" class="btn btn-primary mb-2">Login</button>
    </form>
    {{isLoginError}}
  </div>
</template>

<script>
import { API_PATH } from "../config/path.js";
import axios from "axios";

export default {
  name: "LoginUser",
  props: {},
  data() {
    return {
      users: {
        UserName: "",
        Password: ""
      },
      isLoginError: ""
    };
  },
  methods: {
    loginUser() {
      this.$validator.validateAll().then(() => {
        axios
          .post(`${API_PATH}/jwt`, this.users)
          .then(data => {
            /* eslint-disable no-console */
            console.log(data)
            localStorage.setItem("token",data.data.token)
            localStorage.setItem("roles",JSON.stringify(data.data.roles))
             this.$router.push({ path: 'users' })
            /* eslint-disable no-console */
          })
          .catch(err => {
              this.isLoginError="Hata";
            /* eslint-disable no-console */
            console.log("hata", err)
            /* eslint-disable no-console */
          });
      });
    }
  }
};
</script>


