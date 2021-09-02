import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/info',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('../views/404.vue')
	}
]

const router = new createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
