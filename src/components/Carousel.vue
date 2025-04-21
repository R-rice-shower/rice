<template>
  <div>
    <Swiper
      :modules="[Autoplay]"
      :autoplay="{ delay: 2000 }"
      :loop="true"
      class="swiper-container"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" class="img" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import 'swiper/css'
import { ref } from 'vue'
import image1 from '@/assets/1.png'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/3.jpg'

const images = ref([image1, image2, image3])
</script>

<style scoped>
.swiper-container {
  margin-top: 10px;
  border-radius: 12px;
  background-color: rgba(28, 142, 111, 0);
  max-width: 80%;
  height: 45vh;
  overflow: hidden;
  position: relative;
  border: 5px solid rgba(28, 142, 111, 0.5); /* 增加边框效果 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* 增加阴影 */
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease; /* 添加图片过渡效果 */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container:hover .img {
  transform: scale(1.05); /* 鼠标悬停时放大图片 */
}
</style>
