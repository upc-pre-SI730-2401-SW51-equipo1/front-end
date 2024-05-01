<script setup>
import { ref, onMounted } from 'vue';
import RecommendationsService from '@/recommendations/services/recommendations.service.js';

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
  <div :class="{container: true}">
    <h1 :class="{title: true}">Recommendations</h1>
    <div :class="{bookcards: true}">
      <div
          v-for="libro in recommendedBooks"
          :key="libro.id"
          :class="{bookcard: true}"
      >
        <img
            :src="libro.image"
            :alt="libro.title"
            :class="{bookcover: true}"
        />
        <div :class="{bookinfo: true}">
          <h3 :class="{booktitle: true}">{{ libro.title }}</h3>
          <p :class="{bookgenre: true}">{{ libro.gender }}</p>
          <p :class="{bookprice: true}">${{ libro.price }}</p>
        </div>
      </div>
    </div>
    <button :class="{showmore: true}">Show More</button>
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

.bookcards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.bookcard {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.bookcover {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.bookinfo {
  text-align: center;
}

.booktitle {
  margin: 0;
  font-size: 16px;
}

.bookgenre {
  margin: 5px 0;
  font-size: 12px;
  color: #888;
}

.bookprice {
  margin: 0;
  font-weight: bold;
}

.showmore {
  background-color: white;
  color: #0073b7;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .bookcards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
