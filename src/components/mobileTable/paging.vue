<template>
  <div class="com-paging">
    <div
      :class="{
        'com-paging-item': true,
        turner: true,
        disabled: (props.index || 1) <= 1,
      }"
      @click="props.index > 1 && emits('change', props.index - 1)"
    >
      上一页
    </div>
    <div class="com-paging-item page">
      <span class="com-paging-current">{{ props.index || "1" }}</span>
      <span class="com-paging-gap">/</span>
      <span>{{ props.total || "0" }}</span>
    </div>
    <div
      :class="{
        'com-paging-item': true,
        turner: true,
        disabled: (props.index || 1) >= props.total / (props.size || 20),
      }"
      @click="
        props.index < (props.total || 0) && emits('change', props.index + 1)
      "
    >
      下一页
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["index", "size", "total"]);
const emits = defineEmits(["change"]);
</script>
<style lang="scss" scoped>
.com-paging {
  height: 74px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  font-size: 26px;
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
    padding: 0 12px;
    transition: all 0.2s linear;

    &:hover {
      opacity: 0.7;
    }
  }
  &.disabled {
    cursor: not-allowed;
    color: #999999ff;
  }
}
.com-paging-current {
  color: #2163ffff;
  font-size: 26px;
  font-weight: 500;
}
.com-paging-gap {
  margin: 0 10px;
}
</style>
