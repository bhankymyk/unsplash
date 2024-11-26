<template>
    <PhotoGrid :photos="photos" :loading="loading" />
  </template>
  
  <script>
  import axios from 'axios';
  import PhotoGrid from '../components/PhotoGrid.vue';
  
  export default {
    name: 'SearchResults',
    components: { PhotoGrid },
    props: ['query'],
    data() {
      return {
        photos: [],
        loading: false,
      };
    },
    watch: {
      '$route.query.q': {
        immediate: true,
        handler(newQuery) {
          if (newQuery) {
            this.fetchSearchResults(newQuery);
          }
        },
      },
    },
    methods: {
      async fetchSearchResults(query) {
        this.loading = true;
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, per_page: 12 },
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
  