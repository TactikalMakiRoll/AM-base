import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import MyList from "@/pages/HomePage.vue";

const routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path:"/my-list",
		component: MyList,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
