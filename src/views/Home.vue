<script setup lang="ts">
import router from '@/router/index'
import { gsap } from 'gsap'
import {onMounted} from "vue";
const goChristmas = () => {
  router.push({ name: 'Christmas' })
}
onMounted(() => {
  gsap.fromTo(".test", {y: 300, color: 'red'},{ y: 100, color: 'green', duration: 3 });
})
</script>

<template>
  <h1 @click="goChristmas" class="test">Home, hello world, my name is Mrs.Zhu</h1>

  <div class="box">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<style scoped>
.test {
  color: red;
  filter: grayscale(0%) drop-shadow(6px 6px 1px #cccccc);
}
.box {
  display: flex;
}
.box .circle:nth-child(1) {
  animation-delay: 0.2s;
}
.box .circle:nth-child(2) {
  animation-delay: 0.4s;
}
.box .circle:nth-child(3) {
  animation-delay: 0.6s;
}
.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #09C58F;
  margin-right: 10px;
  animation: loading 1s infinite;
}
@keyframes loading {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>