<template>
  <div>
    <el-container style="height: 100%">
      <!-- auto代表侧边栏是可以拉伸的 -->
      <!-- 1。侧边导航栏 -->
      <el-aside width="auto" style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)">
        <!-- 引入侧边栏CommonAside（公共）组件 -->
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <!-- 2。头部-->
        <el-header style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)">
          <!-- 引入头部CommonHeader（公共）组件 -->
          <CommonHeader></CommonHeader>
        </el-header>
        <!-- 标签 2-中 -->
        <CommonTags></CommonTags>
        <!-- 3。主内容区-->
        <el-main>
          <!-- 将Main子路由组件想展示的页面放入 -->
          <router-view></router-view>
        </el-main>
        <!-- 4. 未来整一个footer -->
        <el-footer style="font-size: 30px; color: pink; text-align: center"
          >I am Footer</el-footer
        >
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTags from "../components/CommonTags.vue";
export default {
  components: { CommonAside, CommonHeader, CommonTags },
  name: "Main",
  data() {
    return {};
  },
  mounted() {
    // 获得当前页面路由的名称
    // console.log(this.$route);
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  // 设置main可覆盖
  padding-top: 0;
}
</style>  