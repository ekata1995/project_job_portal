<template>
  <div class="container">
    <nav class="navbar navbar-light bg-info">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">Job Portal</a>
      </div>
    </nav>
    <div>
      <router-link
        class="btn btn-primary btn-lg"
        :to="{ name: 'dashboard' }"
        role="button"
        >OpenNavebar</router-link
      >
      <div class="row">
        <v-container>
          <v-alert
            border="left"
            close-text="Close Alert"
            color="green accent-4"
            dark
            dismissible
          >
          </v-alert>
          <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="t in test" :key="t._id">
              <v-card
                class="pa-1"
                :to="{ name: 'test', params: { id: t._id } }"
              >
                <v-img height="250" :src="`${t.image}`"></v-img>
                <v-btn class="ml-4 mt-3" small outlined color="indigo">
                  {{ t.category }}
                </v-btn>
                <v-card-title class="headline">
                  {{ t.title }}
                </v-card-title>
                <v-card-text class="py-0">
                  <p>{{ t.content }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'homeAdmin',
  data() {
    return {
      test: [],
    };
  },
  created() {
    const apiURL = 'http://localhost:5000/auth/fetchpost';

    axios.get(apiURL).then((res) => {
      this.test = res.data;
    });
  },
};
</script>
