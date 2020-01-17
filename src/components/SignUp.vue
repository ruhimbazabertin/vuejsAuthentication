<template>
 <div class="signup-form">
     <form @submit.prevent="onSubmit">
         <div class="form-group" :class="{invalid: $v.firstName.$error}">
         <label for="firstName">FirstName</label>
         <input 
                type="text"
                 class="form-control" 
                 @blur="$v.firstName.$touch()"
                 v-model="firstName">
        <p v-if="$v.firstName.$error" style="color: red;">Your FirstName should have at least 4 characters</p>
        <p v-if="!$v.firstName.required" style="color: red;">This field must not be empty</p>
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
      <div class="form-group" :class="{invalid: $v.email.$error}">
         <label for="email">Email</label>
         <input 
                type="email" 
                class="form-control" 
                @blur="$v.email.$touch()"
                v-model="email">
        <p v-if="!$v.email.email" style="color: red;">Please provide a valid email address</p>
        <p v-if="!$v.email.required" style="color: red;">This field must not be empty</p>
        <p v-if="!$v.email.unique" style="color: red;">Email already exist.</p>
     </div>
      <div class="form-group" :class="{invalid: $v.password.$error}">
         <label for="password">Password</label>
         <input 
                type="password" 
                class="form-control" 
                @blur="$v.password.$touch()"
                v-model="password">
        <p v-if="$v.password.$error" style="color: red;">Password should have at least 4 characters</p>
        <p v-if="!$v.password.required" style="color: red;">This field must not be empty</p>
     </div>
      <div class="form-group" :class="{invalid: $v.confirmPassword.$error}">
         <label for="confirmPassword">Confirm Password</label>
         <input 
                type="password" 
                class="form-control" 
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword">
        <p v-if="$v.confirmPassword.$error" style="color: red;">Password not match</p>
     </div>
           <div class="input inline" :class="{invalid: $v.terms.$invalid}">
         <input 
                type="checkbox" 
                id="terms" 
                @change="$v.terms.$touch()"
                v-model="terms">
         <label for="terms">Accept Terms of Use</label>
         
     </div>
 <div class="form-group">
         <button class="btn btn-primary" @click="onSubmit" :disabled="$v.$invalid">Sign Up</button>
     </div>
     </form>
 </div>
</template>

<script>
//Global Configuration
//import axios from 'axios'
//axios-auth configuration
import axios from '../axios-auth'
import { required, email, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'
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
  validations: {
    firstName: {
      required,
      minLength: minLength(4),
    },  
    email: {
        required,
        email,
        unique: val => {
            if(val === '') return true

            return axios.get('/users.json?orderBy="email"&equalTo="'+ val +'"')
                    .then(res => {
                        console.log(res);
                        return Object.keys(res.data).length === 0
                    })
        }
    },
    password: {
        required,
        minLen: minLength(6),
    },
    confirmPassword: {
        sameAs: sameAs('password'),
    },
    terms: {
        required: requiredUnless(vm => {
            return vm.country === 'Tanzania'
        })
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
.form-group {
    margin: 10px auto;

}
.form-group.invalid label{
    color: red;  
}
.form-group.invalid input{
    border: 1px solid red;
    background-color: #ffc9aa;  
}
</style>