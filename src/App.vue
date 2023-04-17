<template>
  <div>
    <BaseTable :data="data">
      <BaseTableColumn name="名称" prop="name" />
      <BaseTableColumn name="数据" prop="value" />
    </BaseTable>
  </div>
</template>

<script setup>
import { BaseTable, BaseTableColumn } from "@/components/";
import { ref } from "vue";

const data = ref([
  {
    name: "aaa",
    value: 111,
  },
  {
    name: "bbb",
    value: 111,
  },
  {
    name: "ccc",
    value: 111,
  },

  {
    name: "ddd",
    value: 111,
  },
  {
    name: "eeee",
    value: 111,
  },
]);
</script>

<style scoped></style>
