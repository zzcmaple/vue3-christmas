<script setup lang="ts">
import { onMounted, ref, reactive,computed } from 'vue'
import { gsap } from 'gsap'
import backPath from '@/assets/images/christmas.png'
import backPath2 from '@/assets/images/christmas2.png'
import backPath3 from '@/assets/images/christmas3.png'
import backPath4 from '@/assets/images/christmas4.png'
import backPath5 from '@/assets/images/christmas5.png'
import shengdanshu from '@/assets/images/shengdanshu.svg'
import gift from '@/assets/images/gift.svg'
import milu from '@/assets/images/milu.svg'
import shengdanmao from '@/assets/images/shengdanmao.svg'
import shengdanwa from '@/assets/images/shengdanwa.svg'

const showList = reactive([
  {
    logoPath: shengdanshu,
    backPath: backPath,
    isShow: false
  },
  {
    logoPath: gift,
    backPath: backPath3,
    isShow: false
  },
  {
    logoPath: milu,
    backPath: backPath4,
    isShow: false
  },
  {
    logoPath: shengdanmao,
    backPath: backPath5,
    isShow: false
  },
  {
    logoPath: shengdanwa,
    backPath: backPath2,
    isShow: false
  },
])
const contentRef = ref<HTMLElement>();

const showAll = (data: any, index: any) => {
  if (data.isShow) {
    gsap.to('.partItem', {width: '20%', duration: 0.3});
    gsap.to('.backImg', {opacity: 0, display: 'none', duration: 0.2, delay: 0.25})
    gsap.to('.icon', {opacity: 1, display: 'block', duration: 0.2, delay: 0.4})
  } else {
    gsap.to(document.querySelectorAll('.backImg')[index], {opacity: 1, display: 'block', duration: 0.2, delay: 0.4})
    gsap.to('.icon', {opacity: 0, display: 'none', duration: 0.2})
    document.querySelectorAll('.partItem').forEach((item, i) => {
      if (index !== i) {
        gsap.fromTo(item, {width: '20%'}, {width: '0%', duration: 0.3});
      } else {
        gsap.fromTo(item, {width: '20%'}, {width: '100%', duration: 0.3});
      }
    })
  }
  showList.forEach(item => {
    item.isShow = item === data ? !item.isShow : false
  })
}

onMounted(() => {
  gsap.fromTo(document.querySelectorAll('.center'),  {top: '50%'}, {top: 0, duration: 1});
})
</script>

<template>
  <div class="content" ref="contentRef">
    <div class="partItem" v-for="(item, index) in showList" @click="showAll(item, index)">
      <img class="backImg positionCenter" :src="item.backPath" alt="">
      <div class="center">
        <img class="icon positionCenter" :src="item.logoPath" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
}
.content>div:nth-child(1) {
  background-color: #F5624D;
}
.content>div:nth-child(2) {
  background-color: #CC231E;
}
.content>div:nth-child(3) {
  background-color: #34A65F;
}
.content>div:nth-child(4) {
  background-color: #0F8A5F;
}
.content>div:nth-child(5) {
  background-color: #235E6F;
}
.content>div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all .4s;
}
.content>.partItem:hover {
  width: 40%;
}
.content>.partItem {
  width: 20%;
}
.content>.allItem {
  width: 100%;
}
.content>.zeroItem {
  width: 0%;
}
.center {
  position: relative;
  width: 120px;
  height: 120px;
  max-width: 70%;
  max-height: 70%;
  text-align: center;
  transition: all .4s;
}
.content>div:hover .center {
  transform: rotate(20deg);
}
.content>div .icon {
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  transition: all .4s;
}
.backImg {
  display: none;
  opacity: 0;
  width: 700px;
  max-width: 70%;
}
.positionCenter {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>