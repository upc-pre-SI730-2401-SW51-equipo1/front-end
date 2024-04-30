<script setup>
import { ref, onMounted } from 'vue';
import RecommendationsService from '@/recommendations/services/recommendations.service.js';
import {Libro} from "@/recommendations/model/Libro.entity.js";

const recommendedBooks = ref([]);

onMounted(async () => {
  try {
    const books = await RecommendationsService.getAllLibros();
    recommendedBooks.value = books.filter(libro => libro.recommendation === 'Recommended');
  } catch (error) {
    console.error('Error fetching recommended books:', error);
  }
});
</script>

<template>
  <div class="container">
    <h1 class="title">Recommendations</h1>
    <div class="book-cards">
      <div
          v-for="libro in recommendedBooks"
          :key="libro.id"
          class="book-card"
      >
        <img
            :src="libro.image"
            :alt="libro.title"
            class="book-cover"
        />
        <div class="book-info">
          <h3 class="book-title">{{ libro.title }}</h3>
          <p class="book-genre">{{ libro.gender }}</p>
          <p class="book-price">${{ libro.price }}</p>
        </div>
      </div>
    </div>
    <button class="show-more">Show More</button>
  </div>
</template>

<style scoped>
.container {
  background-color: #0073b7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: black;
  text-align: center;
  margin-bottom: 20px;
}

.book-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.book-card {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.book-cover {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.book-info {
  text-align: center;
}

.book-title {
  margin: 0;
  font-size: 16px;
}

.book-genre {
  margin: 5px 0;
  font-size: 12px;
  color: #888;
}

.book-price {
  margin: 0;
  font-weight: bold;
}

.show-more {
  background-color: white;
  color: #0073b7;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .book-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}


</style>