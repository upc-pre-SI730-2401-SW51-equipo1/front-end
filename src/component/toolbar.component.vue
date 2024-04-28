<script setup>

</script>

<template>
  <pv-toolbar #start>
    <h1>ChromaComics</h1>
    <slot>
      <!--Añadir pestañas según crean conveniente-->
      <Button :to="{ name: 'about' }" label="Files" text plain>Files</Button>
    </slot>
  </pv-toolbar>
</template>

<style scoped>

</style>