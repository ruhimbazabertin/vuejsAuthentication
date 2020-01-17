<template>
 <div class="signup-form">
     <form>
         <div class="form-group">
         <label for="firstName">UserName</label>
         <input type="text" class="form-control" v-model="username">
     </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input type="password" class="form-control" v-model="password">
     </div>
 <div class="form-group">
         <button class="btn btn-primary" @click="onSubmit">Sign In</button>
     </div>
     </form>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
      return{
          username: '',
          password: '',
      };
  },
  methods: {
      onSubmit() {
             const userData = {
                username: '',
                password: '',
             }
        // axios.post('https://testpro-26e7f.firebaseio.com/data.json', userData) => {

         } 
      }
  }
</script>

<style scoped>
.signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    
}
.input {
    margin: 10px auto;
    
}
</style>