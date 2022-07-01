<template>
  <div>
    <div class="container">
      <el-button type="success" plain @click="displayCode">随机码</el-button>
      <h1>{{ result }}</h1>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
.container {
  margin-top: 40px;
  margin-left: 40px;
}
</style>