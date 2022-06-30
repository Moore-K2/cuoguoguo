<template>
  <div>
    <div class="data" :style="{ backgroundImage: 'url(' + bg + ')' }"></div>
  </div>
</template>

<script>
import bg1 from "../../assets/img/107.png";
export default {
  name: "Index",
  data() {
    return {
      bg: bg1,
    };
  },
};
</script>

<style>
.data {
  margin-top: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;
  box-shadow: 0 0 10px black;
}
</style>