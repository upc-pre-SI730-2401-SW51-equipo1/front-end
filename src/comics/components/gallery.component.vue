<script>
import {defineComponent} from "vue";
import ComicCard from "@/comics/components/comic-card.component.vue";
import {fetchComics} from "@/comics/service/comics-api.service";

export default defineComponent({
  name: 'Gallery',
  components: {ComicCard},
  data() {
    return {
      comics: [],
      message: `filtro: Comics` // Añade tu mensaje aquí
    };
  },
  created() {
    fetchComics().then(data => {
      this.comics = data;
    });
  },
  methods: {
    uppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
})
</script>

<template>
  <div>
    <div class="custom-class">
      <p>{{ uppercase(message) }}</p> <!-- Usa el método aquí -->
    </div>
    <nav class="navbar">
      <pv-button icon="pi pi-sliders-h" class="p-mr-2" plain text></pv-button>
      <div class="search-bar">
        <input type="text" placeholder="Search comics">
        <button type="button">Search</button>
      </div>
    </nav>
  </div>

  <div>
    <ComicCard  v-for="comic in comics" :key="comic.id" :comic="comic" class="ComicCard"></ComicCard>
  </div>

</template>

<style scoped>

.ComicCard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

nav{
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
ul{
  display: flex;
  gap: 1rem;
  list-style: none;
}
li{
  display: inline;
}

/* Navbar styles */
.navbar {
  background-color: #fff;
  color: #222;
  padding: 1rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
.custom-class {
  border: 1px solid white;
  margin-left: 0;
  background-color: #fff;
}
.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.search-bar {
  display: flex;
  margin-left: auto;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-bar button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive styles for hamburger menu */
@media (max-width: 768px) {
  .search-bar {
    flex-basis: 100%;
    justify-content: center;
  }
}

</style>