<script setup lang="ts">
import Sidebar from "@/layout/Bars/Sidebar.vue";
</script>

<template>
  <div class="flex items-start">
    <Sidebar/>

    <div class="px-[20px]">
      <slot/>
    </div>
  </div>
</template>
