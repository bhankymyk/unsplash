<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <img :src="modalPhoto.urls.regular" :alt="modalPhoto.alt_description" />
        <button class="close-button" @click="close">×</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageModal',
    props: {
      modalPhoto: Object,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }
  
  .modal-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .close-button {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #fff;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    width: 35px;
    height: 35px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  