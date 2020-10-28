<template>
  <div id="backgroundLoading" class="row center-xs center-md middle-xs middle-md">
    <div class="col">
      <v-progress-circular :size="70" :width="7" color="orange lighten-2" indeterminate></v-progress-circular>
    </div>
  </div>
</template>
<style scoped>
#backgroundLoading {
  position: fixed;
  z-index: 30;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #e0f2f1;
}
</style>