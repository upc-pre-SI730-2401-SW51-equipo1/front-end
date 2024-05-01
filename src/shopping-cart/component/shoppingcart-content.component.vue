<script setup>
import { ref, onMounted } from 'vue';
import shoppingcartService from '../services/shoppingcart.service';


const ShopCart = ref([]);

onMounted(async () => {
  try {
    const carts = await shoppingcartService.getAllCarts();
    ShopCart.value = carts.filter(shoppingcart => shoppingcart.id !== 0);
    console.log('ShopCart:', ShopCart);
  } catch (error) {
    console.error('Error fetching the  cart:', error);
  }
});
</script>

<template>


  <div class="container">
    <h1 class="title">Your Shopping Cart!</h1>
    <div class="cart-cards">
      <div v-for="shoppingcart in ShopCart" :key="shoppingcart.id" class="cart-card">
        <div class="cart-info">
          <h3 class="cart-price">{{ shoppingcart.title }}</h3>
          <p class="cart-price">${{ shoppingcart.pricetotal }}</p>

        </div>

      </div>
      <button class="button-class" @click="$router.push('/online')">Continuar</button>
    </div>
  </div>

</template>


<style scoped>
.container {
  background-color: #ffffff;
  position: fixed;
  left: 60%;
  top: 1%;
  z-index: 1;
  border: 1px solid black;
  width: 35em;
  height: 10em;
}
.button-class{
  margin-top: 20px;
}
.title {
  color: black;
  text-align: center;
  margin-bottom: 20px;
}

.cart-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  margin-left: 20px;
}

.cart-card {
  background-color: #0073b7;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

}

.cart-title {
  margin: 0;
  font-size: 16px;
}

.cart-price {
  margin: 0;
  font-weight: bold;
}

.show-more {
  background-color: white;
  color: #0073b7;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .cart-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}


</style>