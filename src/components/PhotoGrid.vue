<template>
    <div class="photo-grid">
      <PhotoItem
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        @click="openModal(photo)"
      />
      <LoadingPlaceholder v-if="loading" />
      <ImageModal
      v-if="selectedPhoto"
      :modalPhoto="selectedPhoto"
      @close="closeModal"
    />
    </div>
  </template>
  
  <script>
  import PhotoItem from './PhotoItem.vue';
  import LoadingPlaceholder from './LoadingPlaceholder.vue';
//   import ImageModal from './ImageModal.vue';
import ImageModal from './ImageModal.vue';
  
  export default {
    name: 'PhotoGrid',
    components: { PhotoItem, LoadingPlaceholder, ImageModal },
    props: {
      photos: Array,
      loading: Boolean,
    },
    data() {
      return {
        selectedPhoto: null,
      };
    },
    methods: {
      openModal(photo) {
        this.selectedPhoto = photo;
      },
      closeModal() {
        this.selectedPhoto = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    padding: 20px;
    position: relative;
    z-index: 2;
    top: -50px;
  }
    
    @media (min-width: 1024px) {
      .photo-grid {
        grid-template-columns: repeat(3, 1fr);
        margin-right: 12rem;
        margin-left: 12rem;
      }
    }

    @media (max-width: 480px) {
      .photo-grid {
        grid-template-columns: 1fr;
      }
    }
  
  </style>
  