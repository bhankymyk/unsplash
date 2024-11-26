<template>
    <PhotoGrid :photos="photos" :loading="loading" />
  </template>
  
  <script>
  import axios from 'axios';
  import PhotoGrid from '../components/PhotoGrid.vue';
  
  export default {
    name: 'LandingScreen',
    components: { PhotoGrid },
    data() {
      return {
        photos: [],
        loading: false,
      };
    },
    created() {
      this.fetchLatestAfricanPhotos();
    },
    methods: {
      async fetchLatestAfricanPhotos() {
        this.loading = true;
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: 'African', per_page: 9 },
            headers: {
              Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`,
            },
          });
          this.photos = response.data.results;
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  