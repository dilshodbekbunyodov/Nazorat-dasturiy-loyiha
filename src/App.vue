<script setup lang="ts">
import {useRoute} from "vue-router";

import MainLayout from "@/layout/MainLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";
import ErrorLayout from "@/layout/ErrorLayout.vue";

const route = useRoute()

const layouts = {
  MainLayout: MainLayout,
  LoginLayout: LoginLayout,
  ErrorLayout: ErrorLayout,
}
</script>

<template>
  <component :is="layouts[route.meta.layout] || MainLayout">
    <RouterView />
  </component>
</template>

