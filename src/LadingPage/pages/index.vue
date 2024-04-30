<template>
  <div v-html="indexHtml"></div>


</template>

<script>
import indexHtml from './index.html?raw';


export default {
  data() {
    return {
      indexHtml
    }
  }
}
</script>
<style>
@import '/src/LadingPage/pages/index.css';
@import '/src/LadingPage/pages/global.css';

</style>