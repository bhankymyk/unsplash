<template>
    <div class="loading-placeholder">
      <div class="placeholder" v-for="n in 8" :key="n"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingPlaceholder',
  };
  </script>
  
  <style scoped>
  .loading-placeholder {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 20px;
  }
  
  .placeholder {
    width: 100%;
    padding-top: 75%; /* 4:3 Aspect Ratio */
    background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
  }
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  </style>
  