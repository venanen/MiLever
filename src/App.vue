<template>
  <v-app>
    <v-navigation-drawer
      :right="true"
      v-model="drawer"
      fixed
      app
      mobile-breakpoint="0"
      width="500px"
      style="max-width: 60vw !important"
      temporary
      color="grey lighten-4"
      light
    >
      <CartDrawer />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar-title>MiLever</v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="!searchInput" class="font-weight-light text-lg-h4">
        <v-icon>mdi-phone</v-icon>8-499-334-32-12
      </div>

      <div class="input-search" v-if="searchInput">
        <v-form>
          <v-text-field
            style="margin-top: 26px; width: 15em; max-width: 90vw"
            solo
            placeholder="Введите строку для поиска"
            append-icon="mdi-arrow-right"
            @click:append="testMethod"
          ></v-text-field>
        </v-form>
      </div>

      <v-btn icon x-large>
        <v-icon @click.stop="searchInput = !searchInput">mdi-magnify</v-icon>
      </v-btn>

      <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer">
        <v-icon>mdi-cart</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <ThemeChanger />
      <div :style="{ position: 'inherit', 'z-index': 1 }">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
      <div
        v-bind:style="{ 'background-image': background }"
        id="background"
      ></div>
      <transition name="fade">
        <MainLoading v-if="this.$store.state.mainLoading" />
      </transition>
    </v-main>

    <v-footer style="position: inherit" fixed app>
      <Footer />
    </v-footer>
  </v-app>
</template>
<script>
import ThemeChanger from "./components/themeChanger";

import Footer from "./layout/Footer";
import CartDrawer from "./layout/CartDrawer";
import MainLoading from "./layout/MainLoading";

export default {
  data: function () {
    return {
      drawer: false,
      searchInput: false,
    };
  },
  computed: {
    background: function () {
      return `url("/${this.$store.state.background}.jpg")`;
    },
  },
  methods: {
    testMethod: () => alert(),
  },
  
  components: { ThemeChanger, Footer, CartDrawer, MainLoading },
};
</script>
<style scoped>
@import url(./assets/flexboxgrid.css);
@import url(./assets/global.css);
#background {
  position: fixed;
  z-index: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("./assets/1.jpg");
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transition: opacity 0.3s;
}
</style>
