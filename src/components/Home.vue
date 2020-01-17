<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 col-md-offset-4">
              <span class="content"><strong><p><h2>Time to learn something new!</h2></p></strong></span>
              <hr>
          </div>
      </div>
              
 <div class="row" style="text-align:center;">
  <div class="col-sm-7 col-sm-offset-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">You found the best place to learn-and now you're just one sign in (or sign up) away from it!</h5>
        <router-link to="/signin" class="btn btn-default buto">Sign in</router-link>
        <router-link to="/signup" class="btn btn-default buto">Sign up</router-link>
      </div>
    </div>
  </div>
 <!-- <div class="col-sm-6 ol-sm-offset-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Create a new account to application</h5>
        <router-link to="/signup" class="btn btn-primary">SignUp</router-link>
      </div>
    </div>
  </div>-->
</div>
      <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.buto{
    position: relative;
    margin-left: -200px;
    border: 1px solid blueviolet;
    height: 40px;
    width: 80px;    
}
</style>