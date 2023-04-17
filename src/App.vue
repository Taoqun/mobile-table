<template>
  <div>
    <BaseTable :data="data">
      <BaseTableColumn name="名称" :sort="true" prop="name" />
      <BaseTableColumn name="数据" prop="value" />
      <BaseTableColumn name="数据" prop="value" />
    </BaseTable>
  </div>
</template>

<script setup>
import { BaseTable, BaseTableColumn } from "@/components/";
import { ref } from "vue";

const data = ref([]);
</script>

<style scoped></style>
