<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-row">
        <div class="col">
          <input
            name="Name"
            type="text"
            class="form-control"
            v-validate="'required'"
            v-model="product.Name"
            placeholder="Name"
          >
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('Name')"
          >{{errors.first('Name')}}</div>
        </div>
       
      </div>
      <br>
   <div class="form-row">
        <div class="col">
          <input
            name="Price"
            type="number"
            class="form-control"
            v-validate="'required'"
            v-model="product.Price"
            min="1"
            placeholder="Price"
          >
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('Price')"
          >{{errors.first('Price')}}</div>
        </div>
       
      </div>
      <br>
      <button type="submit" style="float:right;" class="btn btn-primary mb-2">Confirm identity</button>
    </form>
    {{isLoginError}}
  </div>
</template>

<script>
import { API_PATH } from "../../config/path.js";
import axios from "axios";
export default {
  name: "AddProduct",
  props: {},
  data() {
    return {
      product: {
        Name: "",
        Price: "",
      },
      isLoginError: ""
    };
  },
  methods: {
    addProduct() {
      this.$validator.validateAll().then(() => {
        axios
          .post(`${API_PATH}/products`, this.product)
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


