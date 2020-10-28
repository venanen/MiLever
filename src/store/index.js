import Vue from "vue";
import Vuex from "vuex";
import { dataCore } from "../core/index";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		darkTheme: false,
		background: "-2",
		cart: {},
		mainLoading: true,
		shopData: {
			hotSales: [],
			smartphones: [],
		},
		filterData: {
			test: [1, 2, 3],
			test1: [11, 21, 31],
			test2: [11, 21, 31],
		},
	},
	mutations: {
		setDarkTheme(state) {
			state.background = "-1";
			state.darkTheme = true;
		},
		setLightTheme(state) {
			state.background = "-2";
			state.darkTheme = false;
		},
		deleteItemFromCart(state, { id }) {
			Vue.delete(state.cart, id);
		},
		addToCart(state, { data, id }) {
			Vue.set(state.cart, id, data);
			//state.cart[id] = data;
		},
		disableMainLoading(state) {
			state.mainLoading = false;
		},
		enableMainLoading(state) {
			state.mainLoading = true;
		},
		setHotSales(state, payload) {
			state.shopData.hotSales = payload;
		},
		setCatalogData(state, { type, res }) {
			console.log(type, res);
			Vue.set(state.shopData, type, res);
			//state.shopData.smartphones = payload;
		},
		setFiltersData(state, { res }) {
			//Vue.set(state.filtersData, type, res);
			state.filterData = res;
			//state.shopData.smartphones = payload;
		},
	},
	actions: {
		loadingMainPage(context) {
			context.commit("enableMainLoading");
			dataCore.getHotSales().then((res) => {
				context.commit("setHotSales", res);
				context.commit("disableMainLoading");
			});
		},
		loadingCatalogData(context, { type }) {
			context.commit("enableMainLoading");
			dataCore.getCatalogData(type).then((res) => {
				context.commit("setCatalogData", { type: type, res: res });
				context.commit("disableMainLoading");
			});
		},
		loadingFiltersData(context, { type }) {
			context.commit("enableMainLoading");

			dataCore.getFiltersData(type).then((res) => {
				context.commit("setFiltersData", { type: type, res: res });
				context.commit("disableMainLoading");
			});
		},
	},
});
