<template>
  <div>
    <v-sheet class="breadcrumbs">
      <v-breadcrumbs :items="items" large>
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-sheet>
  </div>
</template>

<script>
let titles = {
  smartphones: "Смартфоны",
};
export default {
  props: ["type"],
  data: function () {
    return {
      items: [
        {
          text: "Главная",
          disabled: false,
          to: "/",
        },
        {
          text: titles[this.type], // this.$route.params.type,
          disabled: true,
          to: "",
        },
      ],
      title: titles[this.type],
    };
  },
};
</script>
<style scoped>
.title {
  padding: 0.3em;
  padding-top: 0em;
}
.breadcrumbs {
  padding: 0.3em;
  padding-bottom: 0em;
}
</style>