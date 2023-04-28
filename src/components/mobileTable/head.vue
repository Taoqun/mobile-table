<template lang="">
  <thead class="com-table-thead">
    <th
      v-for="(th, index) in props.list"
      :key="`${th.name}-${th.prop}-${index}`"
    >
      <div :class="['com-table-th', th.align]" @click="changeSort(th)">
        <span>
          {{ th.name }}
        </span>
        <div v-if="th.sort" class="com-th-sort">
          <img
            class="com-sort-icon"
            :src="
              props.sortKey === th.prop && props.sortType === 1
                ? ArrowUpActive
                : ArrowUp
            "
          />
          <img
            class="com-sort-icon down"
            :src="
              props.sortKey === th.prop && props.sortType === -1
                ? ArrrowDownActive
                : ArrowDown
            "
          />
        </div>
      </div>
    </th>
  </thead>
</template>
<script setup>
import ArrowUp from "@/images/narrow_up.png";
import ArrowDown from "@/images/narrow_down.png";
import ArrowUpActive from "@/images/narrow_up_active.png";
import ArrrowDownActive from "@/images/narrow_down_active.png";

const props = defineProps(["list"]);
const emits = defineEmits(["changeSort"]);

function changeSort(item) {
  emits("changeSort", item);
}
</script>
<style lang="scss" scoped>
.com-table-thead {
  background: #f6fafd;
}
.com-table-th {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  padding: 0 10px;
  font-size: 14px;
  line-height: 1;
  color: #666666;

  &.left {
    justify-content: flex-start;
  }
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }

  span {
    flex-shrink: 0;
  }
}
.com-th-sort {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}
.com-sort-icon {
  width: 7px;
  height: 5px;

  &.down {
    margin-top: 2px;
  }
}
</style>
