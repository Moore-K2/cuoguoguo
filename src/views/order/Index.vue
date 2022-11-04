<template>
  <div>
    <div class="container">
      <el-button type="warning" plain @click="send">发送图片请求</el-button>
      <el-row type="flex" justify="space-between" :gutter="5">
        <el-col :span="4">
          <SwiperDemo :banners="banner" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";
import SwiperDemo from "@/components/SwiperDemo.vue";
export default {
  name: "Index",
  components: {
    SwiperDemo,
  },
  data() {
    return {
      banner: [],
    };
  },
  methods: {
    // 发送图片请求
    send() {
      // get是二次封装的方法。 url = baseURL + request url
      get("moore/images", {}).then((res) => {
        console.log(res.data);
        this.banner = res.data;
      });
    },
  },
  created() {
    // 测试axios二次封装的实例
  },
};
</script>

<style>
.container {
  margin-top: 40px;
  margin-left: 40px;
}
</style>