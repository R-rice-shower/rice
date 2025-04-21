<template>
  <div class="uptags">
    <input type="text" placeholder="空格分类" class="uptexts" />
    <button type="submit" class="submit-tags">submit</button>
  </div>
</template>

<script></script>

<style scoped>
.uptags {
  display: flex; /* 横向并排布局 */
  gap: 1vw; /* 输入框和按钮之间的间距 */
  margin-top: 1vw; /* 上下留白 */
}

.uptexts {
  flex: 1; /* 输入框自动扩展占据剩余空间 */
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.submit-tags {
  background-color: cornflowerblue;
  margin-right: 1px;
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  white-space: nowrap;
  max-width: 100%; /* 限制最大宽度 */
  box-sizing: border-box; /* 确保包括内边距和边框 */
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
