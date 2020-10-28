<template>
  <div>
    <CatalogHeader title="1" :type="this.$route.params.type" />
    <CatalogFilters :type="this.$route.params.type" />
    <CatalogGoods :type="this.$route.params.type" />
  </div>
</template>
<script>
import CatalogHeader from "../layout/CatalogHeader";
import CatalogFilters from "../components/CatalogFilters";
import CatalogGoods from "../components/CatalogGoods";
export default {
  components: { CatalogHeader, CatalogFilters, CatalogGoods },
  data: function () {
    return {
      items: [
        {
          text: "Главная",
          disabled: false,
          to: "/",
        },
        {
          text: this.$route.params.type,
          disabled: true,
          to: "",
        },
      ],
    };
  },
  mounted: function(){
    this.$on("")
  }
};
</script>
<style scoped>
</style>