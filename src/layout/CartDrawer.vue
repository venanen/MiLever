<template>
  <div>
    <v-sheet
      color="gray darken-3"
      style="text-align: center; padding: 5%"
      class="text-lg-h3 font-weight-light"
      elevation="3"
      >Корзина</v-sheet
    >
    <transition-group name="fade">
      <CartItem
        v-for="(item, id) in this.$store.state.cart"
        class="fade-item"
        :key="`cartitem_${id}`"
        :key_custom="`cartitem_${id}`"
        :price="item.price"
        :image="item.image"
        :title="item.title"
        :id="id"
        :class1="1"
      />
    </transition-group>
    <v-btn
      v-if="Object.keys(this.$store.state.cart).length !== 0"
      block
      color="success"
      >Оформить заказ</v-btn
    >
    <div class="text-lg-h3 font-weight-light empty-cart" v-else>Пусто...(</div>
  </div>
</template>
<script>
import CartItem from "../components/CartItem";
export default {
  components: { CartItem },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.fade-move {
  opacity: 0.5;
  transition: transform 6s;
}
.empty-cart {
  text-align: center;
  margin-top: 30%;
}
</style>