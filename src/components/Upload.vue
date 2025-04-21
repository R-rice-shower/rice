<template>
  <div class="upload-container">
    <label for="file" class="file-label">upload</label>
    <input type="file" ref="file" id="file" class="file" />
  </div>
</template>

<style scoped>
.upload-container {
  display: flex;

  align-items: center;
}

.file {
  display: none; /* 隐藏原始的文件输入框 */
}

.file-label {
  background-color: cornflowerblue;
  color: white;
  border-radius: 20px;
  padding: 0.5rem;
  cursor: pointer;
  border: 2px solid #ccc;
  text-align: center;
  display: inline-block;
  width: 40vw;
  font-family: 'Permanent Marker', cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
