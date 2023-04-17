#### mobile-table 适用于移动端表格

> 基于`vue3`开发的移动端`table`表格组件

##### 安装

```
npm i mobile-table

// or

yarn add mobile-table
```

##### 使用

```
// 导入组件
import { MobileTable, MobileTableColumn } from "mobile-table";
// 导入样式
import "mobile-table/lib/style.css";
```

#### 预览

> 预览图片
> ![基本图片](https://cdn.taoquns.com/screenshot-20230417-150344.png)

> 预览视频
> <video src="https://cdn.taoquns.com/20230417-153114.mp4" controls></video>

##### 基本用法

```
<template>
  <MobileTable :data="data" >
    <MobileTableColumn name="姓名" prop="name" />
    <MobileTableColumn name="年龄" prop="age" />
    <MobileTableColumn name="性别" prop="sex">
      <template #default="scope">
        <div>{{ scope.row.sex === 1 ? "男" : "女" }}</div>
      </template>
    </MobileTableColumn>
  </MobileTable>
</template>

<script setup>
// 引入组件
import { MobileTable, MobileTableColumn } from "mobile-table";
import "mobile-table/lib/style.css";
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

</script>

<style scoped></style>

```

#### 所有配置 `支持分页` `支持排序`

```
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
import { MobileTable, MobileTableColumn } from "mobile-table";
import "mobile-table/lib/style.css";
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


```

##### MobileTable 属性说明

| 属性名    | 说明       | 类型    | 默认值 | 说明 |
| --------- | ---------- | ------- | ------ | ---- |
| data      | table 数据 | Array   | Array  |      |
| sortKey   | 排序字段   | string  | ''     |      |
| sortType  | 排序类型   | number  | 0      |      |
| paging    | 是开启分页 | boolean | false  |      |
| pageIndex | 分页索引   | number  | 1      |      |
| pageTotal | 总分页数   | number  | 1      |      |

##### MobileTable 事件说明

| 方法       | 说明                    | 类型     | 说明                                           |
| ---------- | ----------------------- | -------- | ---------------------------------------------- |
| sortChange | 排序字段和排序方法 变化 | Function | ({ sortKey: string, sortType: number })=> void |
| pageChange | pageIndex 分页变化      | Function | (index: number)=> void                         |

#### MobileTableColumn 属性说明

| 属性名 | 说明               | 类型    | 默认值 | 说明                    |
| ------ | ------------------ | ------- | ------ | ----------------------- |
| label  | 对应列名称         | string  | ''     |                         |
| prop   | 对应列字段         | string  | ''     |                         |
| width  | 对应列的宽度       | number  | auto   |                         |
| sort   | 对应列是否开启排序 | boolean | false  |                         |
| align  | 对应列的对齐方式   | string  | left   | `left` `center` `right` |
