<template>
  <MobileTable
    :data="data"
    :sortKey="sortKey"
    :sortType="sortType"
    :paging="isShowPaging"
    :pageIndex="pageIndex"
    :pageTotal="pageTotal"
    @sortChange="onSortChange"
    @pageChange="onPageChange"
  >
    <MobileTableColumn name="姓名" prop="name" />
    <MobileTableColumn name="年龄" prop="age" :sort="true" />
    <MobileTableColumn name="性别" prop="sex">
      <template #default="scope">
        <div>{{ scope.row.sex === 1 ? "男" : "女" }}</div>
      </template>
    </MobileTableColumn>
  </MobileTable>
</template>

<script setup>
import { MobileTable, MobileTableColumn } from "@/components/";
import { ref } from "vue";

// 表格数据
const data = ref([
  {
    name: "张三",
    age: 18,
    sex: 1,
  },
  {
    name: "李四",
    age: 18,
    sex: 1,
  },
  {
    name: "王小红",
    age: 18,
    sex: 2,
  },
]);

// 排序
const sortKey = ref("name");
const sortType = ref(1);

// 分页
const isShowPaging = ref(true);
const pageIndex = ref(1);
const pageTotal = ref(12);

// 修改排序
function onSortChange(option = {}) {
  sortKey.value = option.sortKey;
  sortType.value = option.sortType;
}

// 修改分页
function onPageChange(index) {
  pageIndex.value = index;
}
</script>

<style scoped></style>
