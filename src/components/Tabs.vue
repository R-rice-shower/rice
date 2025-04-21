<template>
  <div>
    <Swiper slidesPerView="10" :spaceBetween="10" :freeMode="true" class="Navigation-container">
      <SwiperSlide v-for="(item, index) in tags" :key="index">{{ item }}</SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ref } from 'vue'
const tags = ref([
  '蔚蓝档案',
  '明日方舟',
  '鸣潮',
  '碧蓝航线',
  'hina',
  6,
  7,
  8,
  9,
  10,
  1,
  23,
  4,
  5,
  46,
  7,
])
</script>
<style scoped>
.Navigation-container {
  margin-left: 10vw;
  width: 80vw;
  margin: 1vw;
  margin-left: 8vw;
  border-radius: 5px;
  background-color: rgb(46, 30, 167);
}

.swiper-slide {
  margin: 0.2vw;

  background: #d6d5fc;
  border-radius: 5px;
}
</style>
