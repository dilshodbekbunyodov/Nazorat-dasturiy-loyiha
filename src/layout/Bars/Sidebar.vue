<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

interface Arr {
  title: string,
  route: string
}

const route = useRoute()

const currentItem = ref<string>('')
const arr = ref<Arr[]>([
  {
    title: "Test",
    route: "test",
  },
  {
    title: "Test2",
    route: "test2",
  }
])

watch(() => route.name, function (val) {
  if (val) {
    currentItem.value = val
  }
}, {immediate: true})

const activeRoute = (value: string) => {
  currentItem.value = value
}
</script>

<template>
  <div class="w-[200px] bg-[black] h-[100vh] flex flex-col">
    <ul>
      <li
          v-for="(item, index) in arr"
          :key="index"
          @click="activeRoute(item.route)"
      >
        <router-link class="p-[8px] block" :to="item.route" :class="{activeClass: item.route === currentItem}">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
.activeClass {
  background-color: red;
}
</style>