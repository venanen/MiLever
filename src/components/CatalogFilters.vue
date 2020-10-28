<template>
  <v-sheet>
    <v-divider />
    {{ selectValue["price"] }}
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-4 col-md-3 col-lg"
          v-for="(items, i) in filters"
          :key="i"
        >
          <v-select
            v-model="selectValue[items.name]"
            :items="items.values"
            :menu-props="{ maxHeight: '400' }"
            :label="items.title"
            multiple
            persistent-hint
            dense
            @input="test"
          ></v-select>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["type"],
  data: () => {
    return {
      selectItems: [">4000", "3000-4000", "2000-3000"],
      selectValue: {},
    };
  },
  computed: {
    ...mapState({
      filters: (state) => state.filterData,
    }),
  },
  created: function () {
    this.$store.dispatch("loadingFiltersData", { type: this.type });
  },
  methods: {
    test: function () {
      this.$emit("changeFilters", this.selectItems);
    },
  },
};
</script>