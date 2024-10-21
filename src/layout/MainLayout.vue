<script setup lang="ts">

</script>

<template>
  <div class="flex items-start">
    <div class="w-[200px] bg-[black] h-[100vh]">
      <p>Sidebar</p>
    </div>

    <div class="px-[20px]">
      <slot/>
    </div>
  </div>
</template>
