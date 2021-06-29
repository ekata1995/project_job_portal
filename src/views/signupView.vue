<template>
    <div class="container">
        <div class="card">
  <h1 class="display-4">Signup as a Admin and User</h1>
  
  <hr class="my-4">
  
  <p class="lead">
   
    <router-link
            class="btn btn-primary btn-lg"
            :to="{ name: 'signup' }"
            role="button"
            >Admin Sign Up</router-link
          >
          <router-link
            class="btn btn-primary btn-lg "
            :to="{ name: 'usersignup' }"
            role="button"
            >Student Signup</router-link>
  </p>
</div>

    </div>
</template>