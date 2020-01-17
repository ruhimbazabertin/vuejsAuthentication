<template>
 <div class="signup-form">
     <form>
         <div class="form-group">
         <label for="firstName">FirstName</label>
         <input type="text" class="form-control" v-model="firstName">
     </div>
      <div class="form-group">
         <label for="lastName">LastName</label>
         <input type="text" class="form-control" v-model="lastName">
     </div>
        <div class="form-group">
            <label for="country">Country</label>
            <select name="country" class="form-control" v-model="country">
                <option>Rwanda</option>
                 <option>Kenya</option>
                  <option>Uganda</option>
                   <option>Tanzania</option>
            </select>
     </div>
      <div class="form-group">
         <label for="email">Email</label>
         <input type="email" class="form-control" v-model="email">
     </div>
      <div class="form-group">
         <label for="password">Password</label>
         <input type="password" class="form-control" v-model="password">
     </div>
      <div class="form-group">
         <label for="confirmPassword">Confirm Password</label>
         <input type="password" class="form-control" v-model="confirmPassword">
     </div>
           <div class="input inline">
         <input type="checkbox" id="terms" v-model="terms">
         <label for="terms">Accept Terms of Use</label>
         
     </div>
 <div class="form-group">
         <button class="btn btn-primary" @click="onSubmit">Sign Up</button>
     </div>
     </form>
 </div>
</template>

<script>
//Global Configuration
//import axios from 'axios'
//axios-auth configuration
import axios from '../axios-auth'
export default {
  data(){
      return {
                firstName: '',
                lastName: '',
                country: 'Rwanda',
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
      }
  },
  methods: {    
      onSubmit() {
          const formData = {
                 firstName: this.firstName,
                 lastName: this.lastName,
                 country: this.country,
                 email: this.email,
                 password: this.password,
                 confirmPassword: this.confirmPassword,
                 terms: this.terms,
             
          };
          console.log(formData);
          axios.post('/users.json', formData)
          .then(response => console.log(response))
          .catch(error => console.log(error))
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