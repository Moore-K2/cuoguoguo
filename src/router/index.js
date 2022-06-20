import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 避免Avoided redundant navigation to current location: "/xxx"
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    name: 'Main',
    redirect: 'home', // 路由重定向-跳转到主页
    // component: Home
    component: () =>
        import ("../views/Main.vue"),
    children: [{
            path: '/home',
            name: 'home',
            component: () =>
                import ("../views/home/Index.vue")
        },
        {
            path: '/data',
            name: 'data',
            component: () =>
                import ("../views/data/Index.vue")
        },
        {
            path: '/withdraw',
            name: 'withdraw',
            component: () =>
                import ("../views/withdraw/Index.vue")
        },
        {
            path: '/order',
            name: 'order',
            component: () =>
                import ("../views/order/Index.vue")
        },
        {
            path: '/storeList',
            name: 'storeList',
            component: () =>
                import ("../views/storeList/Index.vue")
        },
        {
            path: '/vip',
            name: 'vip',
            component: () =>
                import ("../views/vip/Index.vue")
        },
        {
            path: '/account',
            name: 'account',
            component: () =>
                import ("../views/account/Index.vue")
        },
        {
            path: '/operation',
            name: 'operation',
            component: () =>
                import ("../views/operation/Index.vue")
        },
        {
            path: '/setting',
            name: 'setting',
            component: () =>
                import ("../views/setting/Index.vue")
        },
    ]
}]

// 创建router实例对象路由器
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router