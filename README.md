#### mobile-table 适用于移动端表格

##### 安装

```
npm i mobile-table

// or

yarn add mobile-table
```

#### 基本用法

```
<template>
  <MobileTable :data="data">
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
</script>

<style scoped></style>

```
