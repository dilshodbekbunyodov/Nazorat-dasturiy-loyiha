<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="bg-image flex">

    <div class="border w-[480px] m-auto py-[30px] px-[30px]">
      <img src="../assets/logo.png" alt="logo" class="m-auto"/>

      <h4 class="text-[#FFFFFF] text-[30px] mt-[20px] text-center">HR-Inspeksiya</h4>


      <div class="mt-[20px]">
        <p class="text-[16px] text-[white] mb-[8px]">Login</p>
        <input type="text" class="bg-[#3F4C63] p-[15px] w-[100%] outline-0 text-white"/>

        <p class="mt-[10px] text-[16px] text-[white] mb-[8px]">Parol</p>
        <input type="text" class="bg-[#3F4C63] p-[15px] w-[100%] outline-0 text-white" id="password"/>
      </div>

      <button
          @click="router.push('/test')"
          class="mt-[40px] w-full py-[14px] text-white text-[18px] border-2 hover:bg-[#0D99FF] focus:bg-[white]focus:text-[#000] transition">
        Kirish
      </button>
    </div>

  </div>
</template>

<style>
.bg-image {
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-color: #293A4C;
}
</style>