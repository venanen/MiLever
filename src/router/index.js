import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage";
import Catalog from "../views/Catalog"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "",
		component: MainPage,
	},
	{
		path: "/catalog/:type",
		name: "",
		component: Catalog,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
