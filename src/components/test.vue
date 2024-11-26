<template>
    <div class="grid-container">
      <div v-for="person in people" :key="person.id" class="card">
        <img :src="person.image" alt="person image" class="card-img" />
        <div class="card-info">
          <h2>{{ person.name }}</h2>
          <p>{{ person.location }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardGrid",
    data() {
      return {
        people: [
          {
            id: 1,
            name: "Jordan Okeke",
            location: "Pretoria, South Africa",
            image: "https://via.placeholder.com/150", // replace with actual images
          },
          {
            id: 2,
            name: "Roland Olagbaye",
            location: "London, United Kingdom",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 3,
            name: "Seun Ayomide",
            location: "Lagos, Nigeria",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 4,
            name: "Fredrick Apata",
            location: "Ogun, Nigeria",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 5,
            name: "Unknown Person",
            location: "Unknown Place",
            image: "https://via.placeholder.com/150",
          },
          {
            id: 6,
            name: "Princess Sonnaike",
            location: "Ogun, Nigeria",
            image: "https://via.placeholder.com/150",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:repeat(2,1fr)
    /* grid-auto-rows: minmax(150px, auto); Set auto-sizing for row height
    grid-auto-flow: dense; Fill the grid compactly
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); Responsive grid
    gap: 20px;
    padding: 20px; */
  }
  
  .card {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card-info {
    padding: 15px;
    text-align: center;
  }
  
  .card-info h2 {
    margin: 10px 0;
    font-size: 1.2rem;
  }
  
  .card-info p {
    color: gray;
    font-size: 0.9rem;
  }
  </style>
   