<template>
  <div class="com-base-table">
    <div class="com-table-wrap">
      <div ref="tableScroll" class="com-table-scroll">
        <table
          class="com-table"
          :border="0"
          :style="{ width: `${tableWidth}px` }"
        >
          <thead class="com-table-thead">
            <th
              v-for="(th, index) in thead"
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
          <tbody>
            <RowItem
              v-for="(item, index) in props.data"
              :key="index"
              :item="item"
            >
              <slot />
            </RowItem>
          </tbody>
        </table>
        <div v-if="!props.data?.length" class="com-base-empty">
          <div>暂无数据</div>
        </div>
      </div>
      <Paging
        v-if="props.paging"
        :index="props.index"
        :total="props.total"
        @change="pageChangeHandler"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, useSlots, watch, nextTick, onBeforeMount } from "vue";
import Paging from "./paging.vue";
import RowItem from "./rowItem.vue";
import ArrowUp from "@/images/narrow_up.png";
import ArrowDown from "@/images/narrow_down.png";
import ArrowUpActive from "@/images/narrow_up_active.png";
import ArrrowDownActive from "@/images/narrow_down_active.png";

/**
 * data 表格数据列表
 * thead 需要展示的字段和名称
 */

const props = defineProps([
  "title",
  "desc",
  "data",
  "sortKey",
  "sortType",
  "paging",
  "index",
  "total",
]);
const emits = defineEmits(["changeSort", "pageChange"]);
const tableScroll = ref("");
const thead = ref([]);
const slots = useSlots();

const tableWidth = ref(0);

function init() {
  const list = slots.default ? slots.default() : [];
  const defaultHead = [];

  list.forEach((item) => {
    if (!item.props && !(item.children instanceof Array)) {
      return;
    }

    if (item.children instanceof Array) {
      item.children.forEach((child) => {
        if (!child.props) {
          return;
        }
        defaultHead.push({
          sort: child.props.sort,
          name: child.props.name,
          align: child.props.align,
          prop: child.props.prop,
        });
      });
    }
    if (item.props) {
      defaultHead.push({
        sort: item.props.sort,
        name: item.props.name,
        align: item.props.align,
        prop: item.props.prop,
      });
    }
  });
  thead.value = defaultHead;
  nextTick(() => {
    initTableWidth();
  });
}

function initTableWidth() {
  let width = 0;

  if (tableScroll.value) {
    const thlist = tableScroll.value.querySelectorAll(".com-table-th span");
    thlist.forEach((dom) => {
      width += dom.offsetWidth + 20;
    });
  }
  tableWidth.value = width;
}

// 切换排序
function changeSort(item) {
  // 未开启排序 点击无效
  if (!item.sort) {
    return;
  }
  let key = props.sortKey || "";
  let type = props.sortType || 1;
  if (key === item.prop) {
    if (type === 1) {
      type = -1;
    } else {
      type = 1;
    }
  } else {
    key = item.prop;
    type = 1;
  }
  emits("changeSort", {
    sortKey: key,
    sortType: type,
  });
}

watch(
  () => props.data,
  (val, oldVal) => {
    init();
  }
);

onBeforeMount(() => {
  init();
});

const pageChangeHandler = (opt) => {
  emits("pageChange", opt);
};
</script>
<style lang="scss" scoped>
.com-base-table {
  background: #ffffff;
  overflow: hidden;
  border-radius: 0;
}
.com-table-wrap {
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;
}
.com-table-scroll {
  width: 100%;
  overflow-x: auto;
}
.com-base-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.com-table {
  min-width: 100%;
  border: none;
  border-collapse: collapse;

  span {
    flex-shrink: 0;
  }
}
.com-table-thead {
  background: #f6fafd;
}
.com-table-th {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 45px;
  padding: 0 5px;
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
