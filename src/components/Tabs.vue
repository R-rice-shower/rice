<template>
  <div class="navigation-wrapper">
    <swiper
      slides-per-view="12"
      :space-between="10"
      :free-mode="true"
      class="navigation-container"
    >
      <swiper-slide
        v-for="(item, index) in tags"
        :key="index"
        class="navigation-tag"
      >
        <el-tag
          size="large"
          type="info"
          effect="light"
        >
          {{ item }}
        </el-tag>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ElTag } from 'element-plus'

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
.navigation-wrapper {
  width: 80vw;
  margin: 1vw auto;
  background-color: #2e1ea7;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.navigation-container {
  width: 100%;
}

.navigation-tag {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
