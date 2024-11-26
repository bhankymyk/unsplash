<template>
  <div id="app">
    <SearchBar @search="handleSearch" />
    <router-view :query="searchQuery" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: { SearchBar },
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query;
      this.$router.push({ name: 'SearchResults', query: { q: query } });
    },
  },
};
</script>

<style>

</style>
