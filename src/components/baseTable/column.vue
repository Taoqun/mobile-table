<template>
  <td class="com-td">
    <div :class="['com-td-wrap', props.align]">
      <slot name="default" :row="item">
        {{ renderItem() }}
      </slot>
    </div>
  </td>
</template>
<script setup>
import { inject } from "vue";
const props = defineProps(["name", "prop", "align"]);
const item = inject("item");

function renderItem() {
  return item[props?.prop] || "";
}
</script>
<style lang="scss" scoped>
.com-td {
  border-style: none;
  height: 45px;
  font-size: 14px;
  color: #333333;
}
.com-td-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 5px;
  font-size: 14px;
  color: #333333;
  line-height: 16px;

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
