<script >

import Header from "@/public/pages/header.vue";
import Footer from "@/public/pages/footer.vue";
import Recomendation from "@/recommendations/component/recomendation-content.component.vue";
export default {
  components: {
    Recomendation,
    Footer,
    Header
  }
}
</script>

<template>
  <div>

    <Header/>
    <Recomendation />
    <Footer/>
  </div>
</template>

<style scoped>

</style>