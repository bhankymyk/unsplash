<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        @keyup.enter="submitSearch"
        placeholder="Search for photos"
      />
      <button @click="submitSearch">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        query: '',
      };
    },
    methods: {
      submitSearch() {
        this.$emit('search', this.query);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    background-color: #eaf0f8;
    justify-content: center;
    padding: 20px;
    position: relative;
    z-index: 1;
    height: 150px;
  }
  
  .search-bar input {
    display: flex;
    justify-items: center;
    width: 800px;
    height: 30px;
    padding: 10px;
    border: 2px solid var(--primary-color);
    border-radius: 10px 0 0 10px;
    outline: none;
    margin-top: 30px;
  }
  
  .search-bar button {
    height: 54px;
    padding: 10px 20px;
    border: 2px solid var(--primary-color);
    border-left: none;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    transition: background-color 0.3s;
    margin-top: 30px;
  }
  
  .search-bar button:hover {
    background-color: darken(var(--primary-color), 10%);
  }
  </style>
  