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
    <MobileTableColumn name="姓名" prop="name" width="60" />
    <MobileTableColumn name="年龄" prop="age" :sort="true" />
    <MobileTableColumn name="性别" prop="sex">
      <template #default="scope">
        <div>{{ scope.row.sex === 1 ? "男" : "女" }}</div>
      </template>
    </MobileTableColumn>
    <MobileTableColumn name="数值1" prop="value1" />
    <MobileTableColumn name="数值2" prop="value2" />
    <MobileTableColumn name="数值3" prop="value3" />
    <MobileTableColumn name="数值4" prop="value4" />
    <MobileTableColumn name="数值5" prop="value5" />
    <MobileTableColumn name="数值6" prop="value6" />
    <MobileTableColumn name="数值7" prop="value7" />
    <MobileTableColumn name="数值5" prop="value8" />
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
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
    value6: "66666",
    value7: "777777",
    value8: "888888",
  },
  {
    name: "李四",
    age: 18,
    sex: 1,
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
  },
  {
    name: "王小红",
    age: 18,
    sex: 2,
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
  },
  {
    name: "张三",
    age: 18,
    sex: 1,
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
    value6: "66666",
    value7: "777777",
    value8: "888888",
  },
  {
    name: "张三",
    age: 18,
    sex: 1,
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
    value6: "66666",
    value7: "777777",
    value8: "888888",
  },
  {
    name: "张三",
    age: 18,
    sex: 1,
    value1: "1111",
    value2: "2222",
    value3: "333333",
    value4: "44444",
    value5: "555555",
    value6: "66666",
    value7: "777777",
    value8: "888888",
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
