<template>
  <div class="row center center-lg center-xs center-md" style="    width: 100%;">
    <div class="col">
      <v-btn text rounded to="/123" class="my-2">
        <div class="text-lg-h5 font-weight-light">Главная</div>
      </v-btn>
    </div>
    <div class="col">
      <v-btn text rounded to="/123" class="my-2">
        <div class="text-lg-h5 font-weight-light">О нас</div>
      </v-btn>
    </div>
    <div class="col">
      <v-btn text rounded to="/123" class="my-2">
        <div class="text-lg-h5 font-weight-light">Контакты</div>
      </v-btn>
    </div>
    <div class="col">
      <v-btn text rounded to="/123" class="my-2">
        <div class="text-lg-h5 font-weight-light">ВК</div>
      </v-btn>
    </div>
    <div class="col">
      <v-btn text rounded to="/123" class="my-2">
        <div class="text-lg-h5 font-weight-light">Inst</div>
      </v-btn>
    </div>
    <div class="col-12">
      <div
        class="text-lg-h6 font-weight-light"
      >ООО "МиЛевер Орандж" 2019 - {{new Date().getFullYear()}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      links: ["Главная", "Контакты", "ВК", "Инстаграмм"],
    };
  },
};
</script>