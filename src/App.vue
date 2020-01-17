<template>
  <div class="container">
   <auth-header> </auth-header>
   <router-view></router-view>
   <auth-footer></auth-footer>
  </div>
</template>

<script>
import Header from './sharedComp/Header'
import Footer from './sharedComp/Footer'
export default {
        data(){
          return{

          };
        },
      components: {
        'auth-header': Header,
        'auth-footer': Footer,
      }
}
</script>

<style>

</style>
