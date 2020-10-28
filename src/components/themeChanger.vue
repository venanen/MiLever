<template>
  <div class="switchTheme">
    <v-btn class="mx-2" fab @click="changeTheme" color="primary">
      <v-icon dark>mdi-invert-colors</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      darkTheme: false,
    };
  },
  methods: {
    changeTheme: function () {
      //$this.store.commit("changeT")
      if (this.darkTheme == false) {
        this.$store.commit("setDarkTheme");
        this.$vuetify.theme.dark = true;
        this.darkTheme = true;
      } else {
        this.$store.commit("setLightTheme");
        this.$vuetify.theme.dark = false;
        this.darkTheme = false;
      }
    },
  },
};
</script>
<style scoped>
.switchTheme {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 5;
}
</style>