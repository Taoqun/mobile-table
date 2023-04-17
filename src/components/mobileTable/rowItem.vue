<template>
  <tr>
    <slot />
  </tr>
</template>
<script setup>
import { provide } from "vue";
const props = defineProps(["item"]);
provide("item", props.item);
</script>
<style lang="scss" scoped></style>
