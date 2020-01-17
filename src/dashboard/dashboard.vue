<template>
  <div>
      <h1>That's the dashboard!</h1>
      <p>You should only get there if you'are authenticated!</p>
      <center><span><strong>Your Email:</strong> {{ email }}</span><br>
             <span><strong>Your Country:</strong> {{ country }}</span></center>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
       return {
          email: '',
          country: '',
       };
   },

   created() {
       axios.get('/users.json')
       .then(response => {
           console.log(response);
           const data = response.data;
           const users = []
           for (let key in data) {
               const user = data[key]
               user.id = key
               users.push(user)
               
           }
           console.log(users);
           this.email = users[0].email
           this.country = users[1].country
       })
       .catch(error => console.log(error))
   }
}
</script>

<style scoped>
h1, p {
    text-align: center;
}
p {
    color: red;
}
.detail{
   text-align: center;
}
</style>