<template>
  <div>
    <nav class="navbar navbar-light bg-info">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Job Portal</a>
    <div class="d-flex">
      <button @click="logout()" class="btn btn-primary">Logout</button>
      </div>
  </div>
</nav>
    <h1 v-if="!user">Getting user information...</h1>
    <h1 v-if="user">Hello, {{user.username}}!! 👋</h1>
    <div class="sidebar">
      <router-link :to="{ name: 'homeAdmin' }">Home</router-link>
      <router-link :to="{ name: 'addPost' }">Add Post</router-link>
      <a href="#contact">Delete Post</a>
      <a href="#about">About</a>
    </div>
  </div>
</template>
<script>
import MarkdownIt from 'markdown-it';
import MDemoji from 'markdown-it-emoji';

const md = new MarkdownIt();
md.use(MDemoji);
const API_URL = 'http://localhost:5000/';
export default {
  data: () => ({
    showForm: false,
    user: null,
    newNote: {
      title: '',
      note: '',
    },
    notes: [],
  }),
  mounted() {
    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${localStorage.token}`,
      },
    }).then((res) => res.json())
      .then((result) => {
        if (result.user) {
          this.user = result.user;
          this.getNotes();
        } else {
          this.logout();
        }
      });
  },
  methods: {
    renderMarkDown(note) {
      return md.render(note);
    },
    getNotes() {
      fetch(`${API_URL}api/v1/notes`, {
        headers: {
          authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json())
        .then((notes) => {
          this.notes = notes;
        });
    },
    addNote() {
      fetch(`${API_URL}api/v1/notes`, {
        method: 'post',
        body: JSON.stringify(this.newNote),
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.token}`,
        },
      }).then((res) => res.json())
        .then((note) => {
          this.notes.push(note);
          this.newNote = {
            title: '',
            note: '',
          };
          this.showForm = false;
        });
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #403cf7;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}
/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
