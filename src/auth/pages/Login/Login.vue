<template >
  <div id="app" :class="$style.app">
    <img :src="'/src/public/assets/logo.png.png'" alt="Logo" :class="$style.logo">
    <input type="text" placeholder="USER NAME" :class="$style.inputField" :value="username" @input="updateUsername">
    <input type="password" placeholder="PASSWORD" :class="$style.inputField" :value="password" @input="updatePassword">
    <button :class="$style.button" @click="login">LOGIN</button>
    <br>
    <button :class="$style.button" @click="redirectToCreateAccount">CREATE ACCOUNT</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import Cookies from 'js-cookie';

export default {
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const store = useStore()

    const updateUsername = event => {
      username.value = event.target.value;
    };

    const updatePassword = event => {
      password.value = event.target.value;
    };

    const login = async () => {
      // Check if any field is empty
      if (!username.value || !password.value) {
        alert('All fields must be filled out')
        return
      }

      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username: username.value,
          password: password.value
        }
      })

      if (response.data.length > 0) {
        store.commit('setAuthenticated', true);
        Cookies.set('isAuthenticated', 'true'); // Establece la cookie isAuthenticated a 'true'
        await router.push('/Prueba')
      } else {
        alert('Invalid credentials')
      }
    }

    const redirectToCreateAccount = () => {
      router.push('/create-account')
    }

    return {
      redirectToCreateAccount,
      login,
      username,
      password,
      updateUsername,
      updatePassword
    }
  }
}
</script>
<style module>
.app {
  background-color: #007bff;
  color: #007bff;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 250px; /* Aumenta el tamaño del logo */
}

.inputField {
  display: block;
  margin: 20px auto;
  padding: 20px;
  font-size: 1.5em;
  border-radius: 15px; /* Añade esta línea para redondear las esquinas */
}

.button {
  background-color: #ffd500;
  color: black;
  border: none;
  padding: 20px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1.5em;
  border-radius: 15px; /* Añade esta línea para redondear las esquinas */
}

.button:hover {
  background-color: lightyellow; /* Cambia el color de fondo a un amarillo más claro cuando el ratón se coloca encima */
  color: orange; /* Cambia el color del texto a gris cuando el ratón se coloca encima */
}
body {
  background-color: #007bff;

}

/* Estilos para pantallas grandes */
@media (min-width: 400px) {
  .logo {
    width: 200px;
  }

  .input-field {
    padding: 15px;
    font-size: 1.3em;
  }

  .button {
    padding: 15px;
    font-size: 1.3em;
  }
}

/* Estilos para pantallas medianas */
@media (min-width: 568px) and (max-width: 599px) {
  .logo {
    width: 400px;
  }

  .input-field {
    padding: 25px;
    font-size: 1.75em;
  }

  .button {
    padding: 25px;
    font-size: 1.75em;
  }
}

/* Estilos para pantallas pequeñas */
@media (max-width: 567px) {
  .logo {
    width: 300px;
  }

  .input-field {
    padding: 20px;
    font-size: 1.5em;
  }

  .button {
    padding: 20px;
    font-size: 1.5em;
  }
}
</style>