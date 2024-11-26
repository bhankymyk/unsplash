<template>
    <div class="photo-item" @click="$emit('click')">
      <img :src="photo.urls.small" :alt="photo.alt_description" />
      <div class="overlay">
        <p class="author">{{ photo.user.name }}</p>
        <p class="location">{{ photo.location?.title || 'Unknown Location' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhotoItem',
    props: {
      photo: Object,
    },
  };
  </script>
  
  <style scoped>
  .photo-item {
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  
  .photo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s;
    border-radius: 15px;
  }
  
  .photo-item:hover img {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px;
    transition: background 0.3s;
  }
  
  /* .photo-item:hover .overlay {
    background: rgba(0, 0, 0, 0.7);
  } */
  
  .author,
  .location {
    margin: 0;
    font-size: 14px;
  }

  :root {
    --overlay-bg: rgba(0, 0, 0, 0.5);
  }
  </style>
  