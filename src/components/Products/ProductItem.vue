
<template>

 

    <tr>
      <th scope="row">{{product.id}}</th>
      <td>{{product.name}}</td>
      <td>{{product.price}}</td>
      <td>{{product.userName}}</td>

    </tr>


</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product:{
      type:Object,
      required:true
    },
    getProducts:{
      type:Function,
      required:true  
    }
  }
 
};
</script>

<style>
</style>