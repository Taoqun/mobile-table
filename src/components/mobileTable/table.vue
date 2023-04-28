<template>
  <div class="com-base-table">
    <div class="com-table-wrap">
      <div ref="tableScroll" class="com-table-scroll">
        <table
          class="com-table"
          :border="0"
          :style="{ width: `${tableWidth}px` }"
        >
          <TableHead :list="thead" @changeSort="changeSort" />
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
          <Empty />
        </div>
      </div>
      <Paging
        v-if="props.paging"
        :pageIndex="props.pageIndex"
        :pageTotal="props.pageTotal"
        @change="onPageChange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, useSlots, watch, nextTick, onBeforeMount } from "vue";
import Paging from "./paging.vue";
import RowItem from "./rowItem.vue";
import Empty from "./empty.vue";
import TableHead from "./head.vue";

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
  "pageIndex",
  "pageTotal",
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
      width += dom.offsetWidth + 15;
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
  let type = props.sortType || 0;
  if (key === item.prop) {
    if (type === 1) {
      type = -1;
    } else if (type === -1) {
      type = 0;
    } else {
      type = 1;
    }
  } else {
    key = item.prop;
    type = 1;
  }
  if (type === 0) {
    key = "";
  }
  emits("sortChange", {
    sortKey: key,
    sortType: type,
  });
}

watch(
  () => props.data,
  () => {
    init();
  }
);

watch(
  () => slots,
  () => {
    init();
  }
);

onBeforeMount(() => {
  init();
});
// 翻页
function onPageChange(index) {
  emits("pageChange", index);
}
</script>
<style lang="scss" scoped>
.com-base-table {
  overflow: hidden;
  border-radius: 0;
  background: #ffffff;
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
</style>
