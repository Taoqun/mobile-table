<template>
  <div class="com-empty">
    <van-empty image-size="100" :description="props.text || '暂无数据'" />
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
