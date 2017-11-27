import Vue from 'vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import Counter from '../components/Counter.vue'
// import Topics from '../components/Topics.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: () =>
                import ('../components/Home.vue')
        },
        {
            path: '/Topics',
            component: () =>
                import ('../components/Topics.vue')
        },
        {
            path: '/Counter',
            component: () =>
                import ('../components/Counter.vue')
        },
        {
            path: '/About',
            component: () =>
                import ('../components/About.vue')
        }
    ]
})

export default router