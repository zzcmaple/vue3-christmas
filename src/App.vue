<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import './lib/particles.js'

const audio = ref<HTMLAudioElement>()
const isPlay = ref<Boolean>(true)
onMounted(() => {
  particlesJS.load('particles-js', '../../particles.json', () => {
    console.log('callback - particles.js config loaded')
  })
  isPlay.value = audio.value?.paused || false
})
const playClick = () => {
  if (isPlay.value) {
    audio.value?.play()
  } else {
    audio.value?.pause()
  }
  isPlay.value = audio.value?.paused || false
}
</script>

<template>
  <div class="app">
    <div id="particles-js"></div>
    <audio v-show="false" controls loop autoplay ref="audio">
      <source src="@/assets/audio/we-wish-you-a-merry-christmas-xmas-background-short-music-30-second-178228.mp3" type="audio/ogg">
      <button>点击</button>
      您的浏览器不支持 audio 元素。
    </audio>
    <button class="btn" :class="{'playAnimation':!isPlay}" @click="playClick">
      <svg v-if="isPlay" t="1702365842513" class="playIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1048" width="200" height="200"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" fill="#ffffff" p-id="1049"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" fill="#ffffff" p-id="1050"></path></svg>
      <svg v-else t="1702366650818" class="playIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1325" width="200" height="200"><path d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z" fill="#ffffff" fill-opacity=".9" p-id="1326"></path></svg>
    </button>
    <router-view />
  </div>
</template>

<style scoped>
#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  pointer-events: none;
}
.btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid aquamarine;
  background-color: #09C58F; /* 添加背景颜色 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  z-index: 11;
}

.playAnimation {
  animation: around 2.5s linear infinite;
}

.btn:hover {
  background-color: #0F8A5F; /* 鼠标悬停时改变背景颜色 */
  transform: scale(1.1); /* 鼠标悬停时放大按钮 */
}
@keyframes around {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.playIcon {
  width: 30px;
  height: 30px;
  color: #ffffff;
}
</style>
