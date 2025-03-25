<template>
  <!-- <BlogPost id="1" blogPostTitle="What is a muggle?" blogPostContent="A muggle is someone who lacks any kind of magical abilities"></BlogPost> -->

  <!-- Good practice is using kebad case -->
  <!-- <BlogPost id="1" blog-post-title="What is a muggle?" blog-post-content="A muggle is someone who lacks any kind of magical abilities"></BlogPost>
  <BlogPost :id="blogPostId" :blog-post-title="blogPostTitle" :blog-post-content="blogPostContent"></BlogPost> -->

  <hr>

  <BlogPost v-for="post in posts" :id="post.id" :blog-post-title="post.blogPostTitle" :blog-post-content="post.blogPostContent" :key="post.id"></BlogPost>

  <BlogPost v-for="post in posts" v-bind="post" :key="post.id"></BlogPost>
</template>

<script setup>
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';

let blogPostId = ref(2)
let blogPostTitle = ref('HP and the Curse Child Broadway production suspended')
let blogPostContent = ref(
  'Adding to the earlier post, the Broadway production....'
)

let posts = ref([
  {
    id: 1,
    blogPostTitle: 'What is a muggle in HP world?',
    blogPostContent:
      'A muggle is a person who lacks any sort of magical ability...'
  },
  {
    id: 2,
    blogPostTitle:
      'HP and the Cursed Child Broadway production suspended until April',
    blogPostContent:
      'Adding to the earlier post, the Broadway production of Harry Potter and the Cursed Child has been...'
  },
  {
    id: 3,
    blogPostTitle: 'Potter DIY: Make Your Own “Harry Potter Puppet Pal”',
    blogPostContent:
      'We all remember those iconic YouTube videos of Harry and the gang and probably couldn’t get “The Mysterious...'
  },
  {
    id: 4,
    blogPostTitle: 'Fan Project Brings Life to “Harry Potter” in Translation',
    blogPostContent:
      'It’s no secret that the Harry Potter series is a global phenomenon, having been translated into over 80 languages to date....'
  }
])
</script>

<style lang="scss" scoped>

</style>