import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginandSign from '@/views/Loginasign.vue'
import BlogView from '@/views/BlogView.vue'

import Login from '@/components/login/login.vue'
import Register from '@/components/signin/signin.vue'
import UpdateUserPassword from '@/components/updatepasword/updatepassword.vue'

// 下面是博客的详情页面
import blogdetail from '@/components/blogviewcomponent/blogdetail'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
		path:"/loginandsign",
		name:"loginandsign",
		component:LoginandSign,
		children:[
			{
				path:"/",
				name:"login",
				component:Login
			},
			{
				path:"register",
				name:"register",
				component:Register
			},
			{
				path:"updatepasword",
				name:"updatepasword",
				component:UpdateUserPassword
			}
		]
	},
	{
		path: '/blogview',
		name: 'blogview',
		component: BlogView
	},
	{
	  path:'/blogdetail/:blogid/:bloginstoreitem',
	  name: 'blogdetail',
	  component:blogdetail
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
