<template>
  <div>
    <div class="container">
      <!-- 走马灯 -->
      <div class="carousel" :style="{ transform: `translateX(-${this.i}00%)` }">
        <div class="item" v-for="(item, index) in List" :key="index">
          <img :src="item.img" />
        </div>
      </div>
      <!-- 指示器 -->
      <div class="indicator">
        <span
          v-for="(item, index) in List"
          :key="index"
          :class="index == i ? 'active' : ''"
          @click="moveTo(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      i: 0,
      List: [
        { img: require("@/assets/img/65.jpg") },
        { img: require("@/assets/img/88.jpg") },
        { img: require("@/assets/img/89.jpg") },
        { img: require("@/assets/img/90.jpg") },
        { img: require("@/assets/img/95.jpg") },
        { img: require("@/assets/img/96.jpg") },
      ],
    };
  },
  methods: {
    moveTo(index) {
      this.i = index;
    },
  },
  // 自动播放
  // created() {
  //   setInterval(() => {
  //     if (this.i < this.List.length) {
  //       this.i++;
  //     } else {
  //       this.i = 0;
  //     }
  //   }, 1500);
  // },
};
</script>

<style lang="less" scoped>
.container {
  width: 400px;
  height: 660px;
  margin: 10px auto;
  overflow: hidden;
  border-radius: 10px;
  position: relative; // 便于indicator定位
  .carousel {
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 0.8s ease-in-out;
    .item img {
      width: 400px;
      height: 660px;
    }
  }
  .indicator {
    position: absolute;
    top: 25px;
    display: flex;
    // 移动indicator的位置
    left: 50%;
    transform: translateX(-50%);
    span {
      width: 30px;
      height: 30px;
      border: 2px solid #ccc;
      border-radius: 50%;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  .indicator span.active {
    background: #fff;
    border-color: #fff;
  }
  .indicator span:hover {
    background: pink;
  }
}
</style>