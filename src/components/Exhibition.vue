<template>
  <div class="exhibition-container">
    <div>
      <h1 class="exhibition-title">RECOMMEND</h1>
      <hr />
    </div>
    <img v-for="(img, i) in images" :key="i" :src="img" @click="preview = img" class="exhibition" />
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const preview = ref('')
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/3.jpg'

const images = ref([image1, image2, image3])
</script>
<style scoped>
.exhibition-container {
  width: 80%;
  margin-left: 10%;
  background-color: rgb(158, 228, 228);
}
.exhibition-title {
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
  color: #2514bb;
  font-size: 4vh;
}
hr {
  width: 50%;
  border: none;
  border-bottom: 4px solid #0f72c9;
  margin-bottom: 10px;
}

.exhibition {
  width: 31%;
  margin: 10px;

  background-color: #ce4d4d;
}
</style>
<!--swapy组件之后再玩，已经安装-->
