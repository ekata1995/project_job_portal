import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import userSignup from '../views/Signup.vue';
import userLogin from '../views/userLogin.vue';
import Signup from '../views/userSignup.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import admin from '../views/admin.vue';
import addPost from '../views/addPost.vue';
import homeAdmin from '../views/homeAdmin.vue';
import userHome from '../views/userHome.vue';
import applyNow from '../views/applyNow.vue';
import signupView from '../views/signupView.vue';
import loginView from '../views/loginView.vue';

function loggedInRedirectDashboard(to, from, next) {
  if (localStorage.token) {
    next('/dashboard');
  } else {
    next();
  }
}

function isLoggedIn(to, from, next) {
  if (localStorage.token) {
    next();
  } else {
    next('/login');
  }
}
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter: loggedInRedirectDashboard,
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: userLogin,
    beforeEnter: loggedInRedirectDashboard,
  },
  {
    path: '/usersignup',
    name: 'usersignup',
    component: userSignup,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: loggedInRedirectDashboard,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
  },
  {
    path: '/addpost',
    name: 'addPost',
    component: addPost,
  },
  {
    path: '/homeAdmin',
    name: 'homeAdmin',
    component: homeAdmin,
  },
  {
    path: '/userHome',
    name: 'userHome',
    component: userHome,
  },
  {
    path: '/applyNow',
    name: 'applynow',
    component: applyNow,
  },
  {
    path: '/signupView',
    name: 'signupView',
    component: signupView,
  },
  {
    path: '/loginView',
    name: 'loginView',
    component: loginView,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
