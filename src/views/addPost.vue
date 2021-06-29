<template>
  <div class="container">
    <nav class="navbar navbar-light bg-info">
  <div class="container-fluid">
    <a href="/" class="navbar-brand">Job Portal</a>
  </div>
</nav>
    <h2 v-if="user">Hello, {{user.username}}!! 👋</h2>
    <div>
      <router-link
        class="btn btn-primary btn-lg"
        :to="{ name: 'dashboard' }"
        role="button"
        >OpenNavebar</router-link
      >
    </div>
    <form @submit.prevent="addMessage" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="username">Job Title</label>
        <input
          v-model="message.title"
          type="text"
          class="form-control"
          id="username"
          required
        />
      </div>
      <div class="form-group">
        <label for="subject">Category</label>
        <input
          v-model="message.category"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter a subject"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Description</label>
        <textarea
          v-model="message.content"
          class="form-control"
          id="message"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.image"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Post</button>
    </form>
    <div class="list-unstyled">
      <li class="media">
        <img
          v-if="message.imageURL"
          class="mr-3"
          :src="message.imageURL"
          :alt="message.subject"
        />
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{ message.username }}</h4>
          <h5 class="mt-0 mb-1">{{ message.subject }}</h5>
          {{ message.message }}
          <br />
          <small>{{ message.created }}</small>
        </div>
      </li>
      <hr />
    </div>
  </div>
</template>

<script>

const API_URL = 'http://localhost:5000/auth/createPost';

export default {
  name: 'home',
  data: () => ({
    error: '',
    messages: [],
    message: {
      title: '',
      category: '',
      content: '',
      image: '',
    },
  }),
  mounted() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        this.messages = result;
      });
  },
  methods: {
    // additem() {
    //   const uri = 'http://localhost:5000/auth/createPost/';
    //   axios.post(uri, this.messages).then((response) => {
    //     console.log(response);
    //   });
    // },
    addMessage() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map((detail) => detail.message)
              .join('.');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageForm = false;
            this.messages.push(result);
          }
        });
    },
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
