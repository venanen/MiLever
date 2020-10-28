<template>
  <div class="container-fluid">
    <MainCarousel />
    <div class="row">
      <div class="col-lg-9 col-sm">
        <MainPageLayout name="Лидеры продаж" :goods="goods" />
        <v-img
          style="margin-top: 1em"
          src="https://mi-shop.com/upload/iblock/339/3399a6c12ac265238e0693bf852ec920.jpeg"
          contain
        />
      </div>
      <div class="col-lg-3 col-sm">
        <div class="row" style="height: 100%">
          <div class="col" style="padding-top: 0px">
            <v-card to="/catalog/homes" style="height: 100%">
              <v-img
                src="https://mi-shop.com/upload/iblock/2af/2af67d4d39496738f6215d9b273fb4fa.jpg"
                contain
              />
              <v-card-title>
                <div class="text-lg-h3 font-weight-light">Техника для дома</div>
              </v-card-title>
            </v-card>
          </div>
          <div class="col" style="padding-bottom: 0px">
            <v-card to="/catalog/lights" style="height: 100%">
              <v-img
                class="display-sm-none"
                src="https://mi-shop.com/upload/iblock/df5/df5e6d4329cf0e83408adb3925ec5e51.jpg"
                contain
              />
              <v-card-title>
                <div class="text-lg-h3 font-weight-light">Освещение</div>
              </v-card-title>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <v-card class="row center-lg" style="padding: 4%; margin-left: 0px">
      <div class="col">
        <v-icon x-large>mdi-certificate</v-icon>
        <div class="text-lg-h4 font-weight-light">Авторизованный магазин</div>
      </div>
      <div class="col">
        <v-icon x-large>mdi-check</v-icon>
        <div class="text-lg-h4 font-weight-light">Официальные поставки</div>
      </div>
      <div class="col">
        <v-icon x-large>mdi-map-marker</v-icon>
        <div class="text-lg-h4 font-weight-light">850 пунктов самовывоза</div>
      </div>
    </v-card>

    <div class="row"></div>
  </div>
</template>

<script>
import MainPageLayout from "../layout/MainPageLayout";
import MainCarousel from "../layout/MainCarousel";
import { mapState } from "vuex";

export default {
  components: { MainCarousel, MainPageLayout },
  data: function () {
    return {};
  },
  computed: mapState({
    goods: (state) => state.shopData.hotSales,
  }),
  mounted() {
    this.$store.dispatch("loadingMainPage");
  },
};
</script>