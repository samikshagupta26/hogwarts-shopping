import About from '@/Views/About.vue'
import Ads from '@/Views/Ads.vue'
import BlogPost from '@/Views/BlogPost.vue'
import BlogPosts from '@/Views/BlogPosts.vue'
import BlogPostsGreet from '@/Views/BlogPostsGreet.vue'
import Home from '@/Views/Home.vue'
import Login from '@/Views/Login.vue'
import MainLayout from '@/Views/MainLayout.vue'
import NotFound from '@/Views/NotFound.vue'
import { isAuthenticated } from '@/apis/auth'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'mainLayout',
            component: MainLayout,
            redirect: { name: 'Home' },
            children: [
                { path: '/home', name: "Home", component: Home , meta: { requiresAuth: false, title: 'Home' } },
                { path: '/about', name: "About", component: About },
                {
                    path: '/blog', name: "BlogPosts", component: BlogPosts,
                    redirect: { name: 'blogPostsGreet' },
                    children: [
                        { path: '', name: 'blogPostsGreet', component: BlogPostsGreet , meta: { requiresAuth: false } },
                        {
                            path: '/blogPost/:id{\\d+}', name: 'blogPost', components: {
                                default: BlogPost,
                                sidebar: Ads
                            },
                            meta: { requiresAuth: false, title: 'Blog Post' }
                        }
                    ]
                },
            ]
        },
        { path: '/login', name: "login", component: Login , meta: { requiresAuth: false, title: 'Login' } },

        // not found pages
        { path: '/:pathMatch(.*)*', name: "NotFound", component: NotFound }
    ]
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) {
        return {name: 'login', query: { redirect: to.fullPath }}
    }
})


router.afterEach((to, from) => {
    document.title = to.meta.title || 'Vue with Bingyang'
})

export default router