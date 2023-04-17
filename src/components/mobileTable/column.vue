<template>
  <td class="com-td">
    <div
      :class="['com-td-wrap', props.align]"
      :style="{ width: props.width + 'px' }"
    >
      <slot name="default" :row="item">
        {{ renderItem() }}
      </slot>
    </div>
  </td>
</template>
<script setup>
import { inject } from "vue";
const props = defineProps(["label", "prop", "sort", "width", "align"]);
const item = inject("item");

function renderItem() {
  return item[props?.prop] || "";
}
</script>
<style lang="scss" scoped>
.com-td {
  flex-shrink: 0;
  border-style: none;
  font-size: 14px;
  color: #333333;
}
.com-td-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #333333;
  line-height: 1.1;

  &.left {
    justify-content: flex-start;
  }
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
}
</style>
