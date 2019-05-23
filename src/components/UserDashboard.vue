

<template>
 
   <div>
     <Header/>
    <router-view style="padding-top:40px;"></router-view>
 </div>
</template>

<script>
import Header from './Header';
export default {
  name: 'UserDashboard',
  props: {
  
  },components:{
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

