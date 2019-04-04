import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path : '/home ',
		component: require('../components/Goods')

	},
	{
		path : '/',
		component: require('../App')

	}]
})

export default router
