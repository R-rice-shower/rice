<template>
  <div class="exhibition-container">
    <h1 class="exhibition-title">RECOMMEND</h1>
    <el-divider></el-divider>

    <el-row :gutter="20" justify="start">
      <el-col
        v-for="(img, i) in images"
        :key="i"
        :span="8"
      >
        <el-card shadow="hover" class="image-card" @click="handlePreview(img)">
          <el-image
            style="width: 100%; height: 30vw"
            :src="img"
            fit="cover"
            lazy
          />
        </el-card>
      </el-col>
    </el-row>

    <el-dialog v-model="showPreview" width="60%">
      <img :src="preview" alt="preview" style="width: 100%" />
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElCard, ElImage, ElDialog, ElRow, ElCol, ElDivider } from 'element-plus'

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
  width: 80%;
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

.image-card {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}
</style>

<!--swapy组件之后再玩，已经安装-->
