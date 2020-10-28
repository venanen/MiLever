<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-lg-2 col-xs col-md"
          v-for="(item, id) in goods"
          :key="id"
        >
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
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import GoodCard from "./GoodCard";

export default {
  props: ["type"],
  computed: {
    ...mapState({
      goods: function (state) {
        return state.shopData[this.type];
      },
    }),
  },
  created() {
    this.$store.dispatch("loadingCatalogData", { type: "smartphones" });
  },
  components: {
    GoodCard,
  },
};
</script>