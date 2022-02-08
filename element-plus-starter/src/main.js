import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from "vue-router";

import Login from "./pages/Login.vue";
import Wms from "./pages/Wms.vue";
import Accounting from "./components/main/Accounting.vue";
import Assignment from "./components/main/Assignment.vue";
import Checkout from "./components/main/Checkout.vue";
import Checkin from "./components/main/Checkin.vue";
import Customer from "./components/main/Customer.vue";
import Goods from "./components/main/Goods.vue";
import Settings from "./components/main/Settings.vue";
import Storage from "./components/main/Storage.vue";

const routes = [
	{
		path: "/",
		name: "login",
		component: Login
	},
	{
		path: "/wms",
		name: "app",
		component: Wms,
		children: [
			{
				path: "accounting",
				name: "accounting",
				component: Accounting
			},
			{
				path: "assignment",
				name: "assignment",
				component: Assignment 
			},
			{
				path: "checkout",
				name: "checkout",
				component: Checkout
			},
			{
				path: "checkin",
				name: "checkin",
				component: Checkin
			},
			{
				path: "customer",
				name: "customer",
				component: Customer
			},
			{
				path: "goods",
				name: "goods",
				component: Goods
			},
			{
				path: "settings",
				name: "settings",
				component: Settings
			},
			{
				path: "storage",
				name: "storage",
				component: Storage
			}
		]
	}
];

let app = createApp(App)
	.use(ElementPlus)
	.use(createRouter({
		history: createWebHashHistory(),
		routes
	}))


app.mount("#app");