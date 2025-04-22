import About from '@/Views/About.vue'
import Ads from '@/Views/Ads.vue'
import BlogPost from '@/Views/BlogPost.vue'
import BlogPosts from '@/Views/BlogPosts.vue'
import BlogPostsGreet from '@/Views/BlogPostsGreet.vue'
import Home from '@/Views/Home.vue'
import NotFound from '@/Views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:"Home", component: Home },
        {path:'/about',name:"About", component: About},
        {path:'/blog',name:"BlogPosts", component: BlogPosts,
            redirect:{name:'blogPostsGreet'},
            children: [
                {path:'', name:'blogPostsGreet', component: BlogPostsGreet},
                {path:':id{\\d+}', name:'blogPost', components:{
                    default: BlogPost,
                    sidebar: Ads
                } }
            ]
        },

        // not found pages
        {path:'/:pathMatch(.*)*', name:"NotFound", component: NotFound}
    ]
})

export default router