<template>
  <div class="com-empty">
    <div></div>
    <div>{{ props.text || "暂无数据" }}</div>
  </div>
</template>
<script setup>
const props = defineProps("text");
</script>
<style lang="scss" scoped>
.com-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 14px;
  line-height: 1;
  color: #999;
}
</style>
