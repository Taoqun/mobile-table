<template>
  <div>
    <BaseTable :data="data">
      <BaseTableColumn name="姓名" prop="name" />
      <BaseTableColumn name="年龄" prop="age" :sort="true" />
      <BaseTableColumn name="性别" prop="sex" />
    </BaseTable>
  </div>
</template>

<script setup>
import { BaseTable, BaseTableColumn } from "@/components/";
import { ref } from "vue";

const data = ref([]);
</script>

<style scoped></style>
