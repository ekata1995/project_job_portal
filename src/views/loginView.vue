<template>
    <div class="container">
        <div class="card">
  <h1 class="display-4">Login as a Admin and User</h1>
  
  <hr class="my-4">
  
  <p class="lead">
   
    <router-link
            class="btn btn-primary btn-lg"
            :to="{ name: 'login' }"
            role="button"
            >Admin Login</router-link
          >
          <router-link
            class="btn btn-primary btn-lg "
            :to="{ name: 'userlogin' }"
            role="button"
            >Student Login</router-link>
  </p>
</div>

    </div>
</template>