<template>
  <div class="row">
    <div class="col-lg-6 col-sm-12 col-md-6">
      <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <v-row class="fill-height" align="center" justify="start">
            <div style="margin-left: 5em">
              <div class="display-3">{{ item.head }}</div>
              <div v-html="item.subhead" class="display-5"></div>
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="col-lg-6 col-sm-12 col-md-6">
      <div class="row" style="height: 100%">
        <div class="col-6" style="padding-top: 0; padding-bottom: 0">
          <v-card to="/catalog/smartphones" style="height: 100%">
            <v-img
              src="https://mi-shop.com/upload/iblock/829/8297dd05b2c941a7364776c8647a656b.jpg"
              lazy-src=""
            />
            <v-card-title>
              <div class="text-lg-h3 font-weight-light">Смартфоны</div>
            </v-card-title>
          </v-card>
        </div>
        <div class="col-6" style="padding-top: 0; padding-bottom: 0">
          <v-card to="/catalog/smarts" style="height: 100%">
            <v-img
              src="https://mi-shop.com/upload/iblock/a89/a890bf9c7fc333644b87d89827a67044.jpg"
            />
            <v-card-title>
              <div class="text-lg-h3 font-weight-light">Умные устройства</div>
            </v-card-title>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          head: "POCO F2 Pro",
          subhead: `Qualcomm® Snapdragon™ 865 с 5G 6,67" AMOLED дисплей`,
          link: "123",
          src:
            "https://xiaomi.shop/upload/iblock/578/5784e2604f303aa61347de539c9fa4d9.jpg",
        },
        {
          head: "Redmi Note 9 Pro",
          subhead: "64 Мпикс. 4 камеры",
          link: "123",
          src:
            "https://xiaomi.shop/upload/iblock/7df/7dffd022467d2d8e09d6f8f6c26636be.jpg",
        },
        {
          head: "Redmi Note 9 Pro",
          subhead: `Процессор Qualcomm Snapdragon 720G<br> Аккумулятор 5020 мАч (тип.)<br> Боковой датчик отпечатки пальца`,
          link: "123",
          src:
            "https://xiaomi.shop/upload/iblock/016/016e9a27ba4a7e23798513b1cc099233.jpg",
        },
        {
          head: "Mi 9T",
          subhead: `Сила полного экрана <br> Выдвижная селфи-камера <br>Тройная камера 48 Мп									`,
          link: "123",
          src:
            "https://xiaomi.shop/upload/iblock/7df/7dffd022467d2d8e09d6f8f6c26636be.jpg",
        },
      ],
    };
  },
};
</script>