<template>
  <div class="upload-container">
    <label for="file" class="file-label">
      <el-icon><Upload /></el-icon>
      Upload
    </label>
    <input type="file" ref="file" id="file" class="file" @change="handleUpload" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Upload } from '@element-plus/icons-vue'

const file = ref(null)

const handleUpload = (e) => {
  const selectedFile = e.target.files[0]
  if (selectedFile) {
    console.log('上传的文件：', selectedFile)
    // 可在此触发上传逻辑
  }
}
</script>

<style scoped>
.upload-container {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file {
  display: none;
}

.file-label {
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: 2px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Permanent Marker', cursive;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  transition: 0.3s ease;
}

.file-label:hover {
  background-color: #4a7be4;
  border-color: #888;
}
</style>
