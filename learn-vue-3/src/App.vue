<template>
  <BaseLayout>
  <template #header>
    <h1>Here might be a page title.</h1>
  </template>
  <!-- Anything without a template will be default or we can give it the #default title -->
  <template #default>
    <p>A paragraph of the main content.</p>
    <p>And another one.</p>
  </template>
  <template #footer>
    <p>Here's some contact info.</p>
  </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue';
</script>

<style lang="scss" scoped>

</style>