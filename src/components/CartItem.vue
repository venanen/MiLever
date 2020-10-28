<template>
  <v-card
    :key-custom="key_custom"
    :class="class1"
    style="margin-top: 1%"
    elevation="0"
    color
  >
    <div class="row">
      <div class="col-3">
        <v-img :src="image" style="border-radius: 50%" />
      </div>
      <div class="col-6 font-weight-light text-lg-h5 sAtC" style>
        {{ title }} - {{ price }} руб.
      </div>
      <div class="col-3 sAtC">
        <v-btn x-large icon color="pink" @click="deleteItemFromCart">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ["price", "image", "title", "id", "class1", "key_custom"],
  methods: {
    deleteItemFromCart: function () {
      this.$store.commit("deleteItemFromCart", { id: this.id });
    },
  },
};
</script>
<style scoped>
.sAtC {
  align-self: center;
  text-align: center;
}
</style>