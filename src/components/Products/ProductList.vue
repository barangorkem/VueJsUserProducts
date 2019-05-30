
<template>
  <div>
    <h4>Products</h4>
    
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Kullanıcı Adı</th>
        </tr>
      </thead>
      <tbody>
      
        <ProductItem v-bind:getProducts="getProducts" v-bind:product="product" v-bind:key="product.id" v-for="product in products"/>
     
      </tbody>
    </table>
  </div>
</template>
 
<script>
import ProductItem from "./ProductItem.vue";
import { API_PATH } from "../../config/path.js";
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductItem
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      return axios
        .get(`${API_PATH}/products`)
        .then(response => response.data)
        .then(data => {   
          this.products = data;
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