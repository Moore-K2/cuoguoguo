<template>
  <div>
    <div class="container">
      <el-button type="success" plain @click="displayCode">随机码</el-button>
      <el-button type="warning" plain @click="send">发送图片请求</el-button>
      <h1>{{ result }}</h1>
    </div>
  </div>
</template>

<script>
import { get } from "@/utils/request.js";
export default {
  name: "Index",
  data() {
    return {
      str: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      result: "",
    };
  },
  methods: {
    displayCode() {
      const arr = this.str.split("");
      for (var i = 0; i < 6; i++) {
        // n 在(0, arr.length)范围内
        var n = Math.floor(Math.random() * arr.length);
        this.result += arr[n];
      }
      return this.result;
    },
    // 发送图片请求
    send() {
      // get是二次封装的方法。 url = baseURL + request url
      get("moore/images", {}).then((res) => {
        console.log(res.data);
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