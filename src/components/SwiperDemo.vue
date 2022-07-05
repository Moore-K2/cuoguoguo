<template>
  <div class="swiper-demo">
    <div v-if="banners.length" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in banners" :key="index" class="swiper-slide">
          <img :src="item.image" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import axios from "axios";
export default {
  name: "SwiperDemo",
  data() {
    return {
      banners: [],
    };
  },
  methods: {},
  async created() {
    // const res = await axios.get("http://localhost:5000/images");
    const res = await axios.get("http://localhost:8080/moore/images");
    console.log("图像数据为：", res.data);
    this.banners = res.data;
  },
  // 这儿本来是mounted()、但只能显示一张图片、是因为created()是异步请求，而mounted是同步的生命周期、
  // 需要我们要在把banners更新完毕后去初始化swiper
  updated() {
    new Swiper(".swiper-container", {
      //   direction: "vertical", // 垂直切换选项
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      // 自动切换
      autoplay: true,
      // 切换样式
      // effect: "coverflow",
      // effect: "fade",
      effect: "cube",
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6,
      },
    });
  },
  mounted() {
    console.log(this.banners.length);
  },
};
</script>

<style>
.swiper-container {
  width: 760px;
  height: 500px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>