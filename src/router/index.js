import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import setting from '../components/setting.vue'
import shopping from '../components/shopping.vue'
import myBook from '../components/myBook.vue'
import main from '../components/main.vue';
import App from '../App.vue';
Vue.use(Router)
export default new Router({
	mode:'history',
	linkActiveClass:'active',
	routes: [{
		path: '/',
		name: 'main',
		component: main,
		children: [{
				path: 'myBook',
				name: 'myBook',
				component: myBook
			},
			{
				path: 'shopping',
				name: 'shopping',
				component: shopping
			},
			{
				path: 'setting',
				name: 'setting',
				component: setting
			}
		]
	}]
})
