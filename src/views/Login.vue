<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <button @click="router.push('test')">Home</button>
</template>

<style scoped>

</style>