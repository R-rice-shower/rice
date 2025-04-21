<template>
  <div class="exhibition-container">
    <h1 class="exhibition-title">RECOMMEND</h1>
    <el-divider></el-divider>

    <div class="image-grid">
      <div class="image-wrapper" v-for="(img, i) in images" :key="i" @click="handlePreview(img)">
        <el-image :src="img" fit="cover" lazy class="image" />
      </div>
    </div>

    <el-dialog v-model="showPreview" width="90%">
      <img :src="preview" alt="preview" style="width: 100%" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElImage, ElDialog, ElDivider } from 'element-plus'

import image1 from '@/assets/1.png'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/3.jpg'

const images = ref([image1, image2, image3])
const preview = ref('')
const showPreview = ref(false)

const handlePreview = (img) => {
  preview.value = img
  showPreview.value = true
}
</script>

<style scoped>
.exhibition-container {
  width: 90vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f9ff;
  border-radius: 12px;
}

.exhibition-title {
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  color: #2514bb;
  font-size: 4vh;
  margin-bottom: 10px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.image-wrapper {
  flex: 1 1 300px;
  max-width: 300px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}

.image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
</style>

<!--swapy组件之后再玩，已经安装-->
