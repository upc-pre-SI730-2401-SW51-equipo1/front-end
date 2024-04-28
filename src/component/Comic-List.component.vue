<script setup>

</script>

<template>
  <div>
    <pv-data-table :value="comics" :loading="loading" showGridlines tableStyle="min-width: 50rem" paginator :rows="5">
      <pv-column field="title" header="Title"></pv-column>
      <pv-column field="publisher" header="Publisher"></pv-column>
      <pv-column field="writer" header="Writer"></pv-column>
    </pv-data-table>
  </div>
</template>

<style scoped>

</style>