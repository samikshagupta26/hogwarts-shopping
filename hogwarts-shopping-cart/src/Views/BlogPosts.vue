<template>
    <div class="blog-posts-layout">
        <aside class="blog-posts-list">
            <BlogPostsList></BlogPostsList>
        </aside>
        <main class="blog-posts-content-with-sidebar">
            <router-view class="blog-posts-content"></router-view>
            <router-view name="sidebar"></router-view>
        </main>
    </div>
</template>

<script setup>
import BlogPostsList from '@/components/BlogPostList.vue';
</script>

<style lang="scss" scoped>
    .blog-posts-layout{
        display: flex;
        gap:1rem;
        width: 100%;
    }

    .blog-posts-list{
        flex: 0 0 25%;
    }

    .blog-posts-content-with-sidebar{
        display: flex;
        gap:1rem;
        flex: 0 0 75%;

        .blog-posts-content{
            flex: 1;
        }
    }
</style>