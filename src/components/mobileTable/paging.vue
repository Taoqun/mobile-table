<template>
  <div class="com-paging">
    <div
      :class="{
        'com-paging-item': true,
        turner: true,
        disabled: props.pageIndex <= 1,
      }"
      :data-num="props.pageIndex"
      @click="prePage"
    >
      上一页
    </div>
    <div class="com-paging-item page">
      <span class="com-paging-current">{{ props.pageIndex || "1" }}</span>
      <span class="com-paging-gap">/</span>
      <span>{{ props.pageTotal || "0" }}</span>
    </div>
    <div
      :class="{
        'com-paging-item': true,
        turner: true,
        disabled: props.pageIndex >= props.pageTotal,
      }"
      @click="nextPage"
    >
      下一页
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["pageIndex", "pageTotal"]);
const emits = defineEmits(["change"]);

// 上一页
function prePage() {
  if (props.pageIndex <= 1) {
    return;
  }
  emits("change", props.pageIndex - 1);
}

// 下一页
function nextPage() {
  if (props.pageIndex >= props.pageTotal) {
    return;
  }
  emits("change", props.pageIndex + 1);
}
</script>
<style lang="scss" scoped>
.com-paging {
  height: 40px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  font-size: 14px;
  color: #1974ff;
  line-height: 1;
}
.com-paging-item {
  display: flex;
  align-items: center;
  &.page {
    color: #999999ff;
  }
  &.turner {
    padding: 0 5px;
    transition: all 0.2s linear;

    &:hover {
      opacity: 0.8;
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: #999999;
  }
}
.com-paging-current {
  color: #2163ffff;
  font-size: 14px;
  font-weight: 500;
}
.com-paging-gap {
  margin: 0 5px;
}
</style>
