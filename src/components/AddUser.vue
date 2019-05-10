<template>
  <div>
    <h1>Add User</h1>
    <form @submit.prevent="addUser">
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
      <div class="form-row">
        <div class="col">
          <input
            name="Email"
            type="text"
            class="form-control"
            v-validate="'required|email'"
            v-model="users.Email"
            placeholder="Email"
          >
          <div
            class="helo block alert alert-danger"
            v-show="errors.has('Email')"
          >{{errors.first('Email')}}</div>
        </div>
      </div>
      <br>
      <button type="submit" style="float:right;" class="btn btn-primary mb-2">Confirm identity</button>
    </form>
    {{isLoginError}}
  </div>
</template>

<script>
import { API_PATH } from "../config/path.js";
import axios from "axios";
export default {
  name: "AddUser",
  props: {},
  data() {
    return {
      users: {
        UserName: "",
        Password: "",
        Email: ""
      },
      isLoginError: ""
    };
  },
  methods: {
    addUser() {
      this.$validator.validateAll().then(() => {
        axios
          .post(`${API_PATH}/users`, this.users)
          .then(data => {
            /* eslint-disable no-console */
            console.log(data);
            /* eslint-disable no-console */
          })
          .catch(err => {
            /* eslint-disable no-console */
            console.log("hata", err);
            /* eslint-disable no-console */
          });
      });
    }
  }
};
</script>


