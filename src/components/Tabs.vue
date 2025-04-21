<template>
  <div class="navigation-wrapper">
    <div class="tag-list">
      <div
        class="tag-item"
        v-for="(item, index) in tags"
        :key="index"
      >
        <el-tag size="large" type="info" effect="light">
          {{ item }}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElTag } from 'element-plus'

const tags = ref([
  '蔚蓝档案', '明日方舟', '鸣潮', '碧蓝航线', 'hina',
  6, 7, 8, 9, 10, 1, 23, 4, 5, 46, 7,
])
</script>

<style scoped>
.navigation-wrapper {
  width: 90vw;
  margin: 10px auto;
  background-color: #2e1ea7;
  padding: 10px;
  border-radius: 8px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}

.tag-item {
  flex: 0 0 auto; /* 固定宽度，由内容决定 */
}
</style>
