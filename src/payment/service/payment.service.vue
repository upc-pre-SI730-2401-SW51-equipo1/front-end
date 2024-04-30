<script>
import { Observable } from 'rxjs';
import axios from 'axios';

let ApiUrl= 'https://api.com'
export default {
  name: 'PaymentService',

  methods: {
    sendPost(nombre, numero) {
      return new Observable(subscriber => {
        axios.post('/tu-endpoint-aqui', {
          nombre: nombre,
          numero: numero
        })
            .then(response => {
              subscriber.next(response.data);
              subscriber.complete();
            })
            .catch(error => subscriber.error(error));
      });
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>