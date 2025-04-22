import About from '@/Views/About.vue'
import BlogPosts from '@/Views/BlogPosts.vue'
import Home from '@/Views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:"Home", component: Home },
        {path:'/about',name:"About", component: About},
        {path:'/blog',name:"BlogPosts", component: BlogPosts},
    ]
})

export default router