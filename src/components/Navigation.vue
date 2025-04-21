<template>
  <div class="tabs">
    <el-button
      class="tabs-item"
      size="small"
      :type="activeTab === 1 ? 'primary' : 'default'"
      @click="setActiveTab(1)"
    >
      用户
    </el-button>
    <el-button
      class="tabs-item"
      size="small"
      :type="activeTab === 2 ? 'primary' : 'default'"
      @click="setActiveTab(2)"
    >
      图片
    </el-button>
    <el-button
      class="tabs-item"
      size="small"
      :type="activeTab === 3 ? 'primary' : 'default'"
      @click="setActiveTab(3)"
    >
      历史
    </el-button>
    <el-button
      class="tabs-item"
      size="small"
      :type="activeTab === 4 ? 'primary' : 'default'"
      @click="setActiveTab(4)"
    >
      设置
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(1)

const setActiveTab = (tab) => {
  activeTab.value = tab
}
</script>

<style scoped>
.tabs {
  background-color: rgb(147, 100, 212);
  border-radius: 20px;
  border: 2px solid #aea8ae;
  display: flex;
  gap: 10px;
  padding: 5px;
}

.tabs-item {
  background-color: rgb(230, 200, 224);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  width: auto;
}
</style>

