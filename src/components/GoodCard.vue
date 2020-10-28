<template>
  <v-card :hover="true" :to="to" class="mx-auto" max-width="400" elevation="2">
    <v-img class="dark--text align-end" height="200px" :src="image" contain>
      <v-chip v-if="chips.new === true" class="ma-2" color="green" text-color="white">
        Новинка
        <v-icon right>mdi-star</v-icon>
      </v-chip>
      <br />
      <!--<v-chip class="ma-2" color="orange" text-color="white">
        Лидер продаж
        <v-icon right>mdi-star</v-icon>
      </v-chip>-->
    </v-img>
    <v-card-title class="dark__text display-1">{{title}}</v-card-title>

    <v-rating
      :length="5"
      color="warning"
      background-color="gray"
      readonly
      :value="rating"
      half-increments
    ></v-rating>

    <v-card-actions>
      <div class="font-weight-light text-h5">{{price}} руб.</div>
      <v-spacer />

      <v-btn v-if="!isInCart" x-large color="orange" icon fab @click.stop="addToCart">
        <v-icon>mdi-cart-plus</v-icon>
      </v-btn>
      <v-btn v-if="isInCart" x-large color="orange" icon fab @click.stop="deleteFromCart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["title", "price", "image", "rating", "chips", "to", "idItem"],
  methods: {
    addToCart: function (e) {
      e.preventDefault();
      e.stopPropagation();

      this.$store.commit("addToCart", {
        data: {
          title: this.title,
          price: this.price,
          image: this.image,
        },
        id: this.idItem,
      });
    },
    deleteFromCart: function (e) {
      e.preventDefault();
      e.stopPropagation();

      this.$store.commit("deleteItemFromCart", {
        id: this.idItem,
      });
    },
  },
  computed: {
    isInCart: function () {
      return this.$store.state.cart[this.idItem] !== undefined;
      //return checkIdInCart(this.$store.state.cart, this.idItem);
    },
  },
};
</script>
