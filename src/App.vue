<script>
import ComicsGallery from './comics/components/gallery.component.vue';

export default {
  components: {
    ComicsGallery
  }
}
</script>

<template>
    <comics-gallery class="comics-gallery"> </comics-gallery>
</template>

<style scoped>
body{
  background-color: #0073B7;
}
.comics-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
