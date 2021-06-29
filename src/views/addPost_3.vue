<template>
  <section class="container">
    <nav class="navbar navbar-light bg-info">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Job Portal</a>
    <div class="d-flex">
      <button @click="logout()" class="btn btn-primary">Logout</button>
      </div>
  </div>
</nav>
    <h1 v-if="!user">Getting user information...</h1>
    <h2 v-if="user">Hello, {{user.username}}!! 👋</h2>
    <div>
      <router-link
        class="btn btn-primary btn-lg"
        :to="{ name: 'dashboard' }"
        role="button"
        >OpenNavebar</router-link
      >
    </div>
    <button @click="showForm = !showForm" class="btn btn-info">Job Form</button>
    <form v-if="showForm" @submit.prevent="addNote()">
      <div class="form-group">
        <label for="title">Job Title</label>
        <input
          v-model="newNote.title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="titleHelp"
          placeholder="Enter a title" required>
        <small
          id="titleHelp"
          class="form-text text-muted">
          Enter a descriptive title for your note.
        </small>
      </div>
      <div class="form-group">
        <label for="note">Category</label>
       <input
          v-model="newNote.title"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="titleHelp"
          placeholder="Enter a title" required>
      </div>
      <div class="form-group">
        <label for="note">Description</label>
        <textarea
          v-model="newNote.note"
          class="form-control"
          id="note"
          rows="3"
          placeholder="Enter your Description" required></textarea>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
    <!-- <section class="row mt-3">
      <div
        class="col-6"
        v-for="note in notes"
        :key="note._id">
        <div class="card border-info mb-3">
          <div class="card-header"><h1>{{note.title}}</h1></div>
          <div class="card-body">
            <p class="card-text" v-html="renderMarkDown(note.note)"></p>
          </div>
        </div>
      </div>
    </section> -->
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it';
import MDemoji from 'markdown-it-emoji';

const md = new MarkdownIt();
md.use(MDemoji);
const API_URL = 'http://localhost:5000/';
export default {
  data: () => ({
    showForm: true,
    user: null,
    newNote: {
      title: '',
      category: '',
      description: '',
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
      fetch(`${API_URL}auth/createpost/`, {
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

<style>
.card {
  height: 90%;
}
.card-text img {
  width: 100%;
}
</style>
