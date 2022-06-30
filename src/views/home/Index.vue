<template>
  <div class="index">
    <div class="container">
      <div
        v-for="(item, index) in imgList"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.bg + ')' }"
        @click="unfold(index)"
        :class="index == i ? 'active' : ''"
        class="pannel"
      >
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Bg1 from "../../assets/img/100.jpg";
import Bg2 from "../../assets/img/101.jpg";
import Bg3 from "../../assets/img/103.jpg";
import Bg4 from "../../assets/img/80.jpg";
import Bg5 from "../../assets/img/94.jpg";

export default {
  name: "Index",
  data() {
    return {
      i: 0,
      imgList: [
        { bg: Bg1, name: "ウルトラセブン" },
        { bg: Bg2, name: "ウルトラセブン" },
        { bg: Bg3, name: "ゾフィー" },
        { bg: Bg4, name: "タロウ" },
        { bg: Bg5, name: "ウルトラマンメ" },
      ],
    };
  },
  methods: {
    unfold(index) {
      this.i = index;
      console.log("我切换的图片为：" + index);
    },
  },
};
</script>

<style lang="less" scoped>
// body {
//   /* 给父亲添加flex属性 */
//   display: flex;
//   /* 侧轴y */
//   align-items: center;
//   /* 主轴x:水平居中 */
//   justify-content: center;
//   height: 100vh;
//   margin: 0;
//   /* 主轴的方向，默认就是row */
//   flex-direction: row;
//   overflow: hidden;
// }

.container {
  margin-left: 20%;
  display: flex;
  /*设置容器元素宽度*/
  width: 55vw;
  // background-color: #bfc;
}

.pannel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* 设置子元素高度 */
  height: 80vh;
  border-radius: 50px;
  cursor: pointer;
  margin: 10px;
  /* 用于子元素 */
  position: relative;
  flex: 0.5;
  color: #fff;
  /* 属性渐变 all duration 方式 */
  /* 兼容老版本浏览器 */
  -webkit-transition: all 0.8s ease-in;
  transition: all 0.8s ease-in;
}

.pannel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  /* 透明度 -让字体先隐藏*/
  opacity: 0;
}

.pannel.active {
  flex: 5;
}

.pannel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in-out 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }
  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>>

