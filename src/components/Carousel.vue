<template>
  <div>
    <Swiper :modules="[Autoplay]" :autoplay="{ delay: 2000 }" :loop="true" class="swiper-container">
      <SwiperSlide v-for="(image, index) in images" :key="index"
        ><img :src="image" class="img"
      /></SwiperSlide>
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
  flex: 1;
  height: 45vh;
  color: aqua;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
