<template>
  <div class="hello">
    <h1>UserEdit</h1>
    <form @submit.prevent="editUser">
      <div class="form-row">
        <div class="col">
          <input
            name="userName"
            type="text"
            class="form-control"
            v-validate="'required'"
            v-model="user.userName"
            placeholder="UserName"
          >
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('userName')"
          >{{errors.first('userName')}}</div>
        </div>
        <div class="col">
          <input
            name="password"
            type="text"
            class="form-control"
            v-validate="'required'"
            v-model="user.password"
            placeholder="Password"
          >
          <div
            class="helo block alert alert-danger"
            v-show="errors.has('password')"
          >{{errors.first('password')}}</div>
        </div>
      </div>
      <br>
      <div class="form-row">
        <div class="col">
          <input
            name="email"
            type="text"
            class="form-control"
            v-validate="'required|email'"
            v-model="user.email"
            placeholder="Email"
          >
          <div
            class="helo block alert alert-danger"
            v-show="errors.has('email')"
          >{{errors.first('email')}}</div>
        </div>
      </div>
      <br>
      <button type="submit" style="float:right;" class="btn btn-primary mb-2">Confirm identity</button>
    </form>
    <h4>{{requestResponse}}</h4>
  </div>
</template>

<script>
import { API_PATH } from "../config/path.js";
import axios from "axios";
export default {
  name: "UserEdit",
  data() {
    return {
      user: {},
      requestResponse:""
    };
  },
  methods: {
    getUser() {
      return axios
        .get(`${API_PATH}/users/${this.$route.params.id}`,{ headers: { Authorization: "Bearer "+localStorage.getItem("token") } })
        .then(response => response.data)
        .then(data => {
          /* eslint-disable no-console */
          console.log(data);
          /* eslint-disable no-console */
          this.user = data;
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log(error);
          /* eslint-disable no-console */
        });
    },
    editUser() {
      this.$validator.validateAll().then(() => {
        axios
          .put(`${API_PATH}/users/${this.$route.params.id}`, this.user)
          .then(data => {
            /* eslint-disable no-console */
            console.log(data);
            this.requestResponse=data.data.message;
            /* eslint-disable no-console */
          })
          .catch(err => {
            /* eslint-disable no-console */
            this.requestResponse=err;
            console.log("hata", err);
            /* eslint-disable no-console */
          });
      });
    }
  },
  created() {
    this.getUser();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

