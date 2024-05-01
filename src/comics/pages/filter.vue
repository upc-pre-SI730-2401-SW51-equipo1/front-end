<script >
import Header from "@/public/pages/header.vue";
import Footer from "@/public/pages/footer.vue";
import galleryComponent from "@/comics/components/gallery.component.vue";
export default {
  components: {
    galleryComponent,
    Footer,
    Header
  }
}
</script>



<template>
  <div>
    <Header/>
    <galleryComponent />
    <Footer/>
  </div>
</template>

<style scoped>

</style>