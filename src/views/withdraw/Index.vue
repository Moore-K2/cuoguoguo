<template>
  <div>
    <el-row type="flex" justify="space-between" :gutter="5">
      <!-- 左 -->
      <el-col :span="8">
        <h2
          style="
            text-align: center;
            line-height: 20px;
            margin-top: 20px;
            font-size: 20px;
          "
        >
          CSS3 transform实现
        </h2>
        <div class="grid-content bg-purple">
          <div class="container">
            <!-- 走马灯 -->
            <div
              class="carousel"
              :style="{ transform: `translateX(-${this.i}00%)` }"
            >
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
          </div></div
      ></el-col>
      <!-- 中 -->
      <el-col :span="15">
        <h2
          style="
            text-align: center;
            line-height: 20px;
            margin-top: 20px;
            font-size: 20px;
          "
        >
          Swiper实现
        </h2>
        <SwiperDemo :banners="banner" />
      </el-col>
      <!-- 右 -->
      <!-- <el-col :span="8"> <div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
  </div>
</template>

<script>
import SwiperDemo from "../../components/SwiperDemo.vue";
import { get } from "@/utils/request.js";
export default {
  name: "Index",
  components: { SwiperDemo },
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
      // images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      // 传入swiper中的数据
      banner: [],
    };
  },
  methods: {
    moveTo(index) {
      this.i = index;
    },
  },
  created() {
    get("moore/images", {}).then(
      (res) => {
        this.banner = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
}
// .bg-purple {
//   background: #d3dce6;
// }

.container {
  width: 400px;
  height: 660px;
  margin: 20px auto;
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