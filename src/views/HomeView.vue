<!-- src/views/HomeView.vue -->
<template>
  <div>
    <div class="container">
      <Navigation />
      <Carousel />

      <h1 class="title">Library</h1>
    </div>
    <div class="select">
      <Upload />
      <Uptags />
    </div>
    <Tabs />
    <Exhibition />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'))
const Carousel = defineAsyncComponent(() => import('@/components/Carousel.vue'))
const Upload = defineAsyncComponent(() => import('@/components/Upload.vue'))
const Uptags = defineAsyncComponent(() => import('@/components/Uptags.vue'))
const Tabs = defineAsyncComponent(() => import('@/components/Tabs.vue'))
const Exhibition = defineAsyncComponent(() => import('@/components/Exhibition.vue'))
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  position: relative; /*容器加relative，浮动加absolute*/
}
.select {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(244, 245, 241);
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
  z-index: 10;
  font-size: 10vh;
}
</style>
