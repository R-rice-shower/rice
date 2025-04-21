<template>
  <div class="uptags">
    <el-input
      v-model="tagInput"
      placeholder="空格分类"
      class="uptexts"
      size="small"
      :clearable="true"
    />
    <el-button
      type="primary"
      class="submit-tags"
      @click="submitTag"
      size="small"
    >
      Submit
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tagInput = ref('')

const submitTag = () => {
  if (tagInput.value.trim()) {
    console.log('提交的标签:', tagInput.value)
    // 在这里处理提交逻辑
    tagInput.value = '' // 提交后清空输入框
  } else {
    console.log('请输入标签')
  }
}
</script>

<style scoped>
.uptags {
  display: flex;
  gap: 1vw;
  margin-top: 1vw;
}

.uptexts {
  flex: 1;
  min-width: 0;
}

.submit-tags {
  padding:1.2rem 1.5rem;
  min-width: 0;
  box-sizing: border-box;
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>

