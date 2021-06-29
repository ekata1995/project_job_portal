<template>
  <div id="app" >
   <nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Job Portal</a>
    
    <div class="dropdown-content">
      <router-link
            class="btn btn-primary btn-lg"
            :to="{ name: 'signupView' }"
            role="button"
            >Sign Up</router-link
          >
          <router-link
            class="btn btn-primary btn-lg "
            :to="{ name: 'loginView' }"
            role="button"
            >login</router-link></div>
</div>
</nav>
  </div>
</template>
