<template>
  <v-card style="padding: 30px;" :style="{marginTop: margin}">
    <div class="row">
      <div class="col-12 display-2">
        {{name}}
        <v-divider />
      </div>
      <div class="col-lg col-xs col-md" v-for="(item, id) in goods" :key="id">
        <GoodCard
          :title="item.title"
          :price="item.price"
          :image="item.image"
          :rating="item.rating"
          :chips="item.chips"
          :to="item.to"
          :id-item="id"
        />
      </div>
    </div>
  </v-card>
</template>
<script>
import GoodCard from "../components/GoodCard";

export default {
  components: { GoodCard },
  props: ["goods", "name", "margin", "color"],
  computed: {},
};
</script>