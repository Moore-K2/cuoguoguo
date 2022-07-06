<template>
  <div>
    <el-menu
      default-active="1-4-1"
      text-color="#282c34"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
    >
      <span class="super">
        <img
          :src="superimg"
          :style="isCollapse ? 'display:none' : 'display:block'"
          alt=""
        />
      </span>
      <h3 :style="isCollapse ? 'color: red;margin-top:30px' : 'color:#409eff'">
        {{ isCollapse ? "Moore" : "光之国 " }}
      </h3>
      <!-- 菜单：遍历首页，数据，提现，订单，门店，会员，账号，运营，设置 -->
      <el-menu-item
        v-for="item in noChildren"
        :key="item.path"
        :index="item.path"
        @click="clickMenu(item)"
      >
        <!-- 图标字体,这儿要拼接，必须前面加：实现动态绑定，这样才不会解析为字符串 -->
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      superimg: require("../assets/img/super.png"),
      // 是否折叠
      // isCollapse: true,
      // 定义接口数组，用于渲染侧边栏
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Index",
        },
        {
          path: "/data",
          name: "data",
          label: "数据",
          icon: "s-data",
          url: "Data/Index",
        },
        {
          path: "/withdraw",
          name: "withdraw",
          label: "提现",
          icon: "coin",
          url: "Withdraw/Index",
        },
        {
          path: "/order",
          name: "order",
          label: "订单",
          icon: "document",
          url: "order/Index",
        },
        {
          path: "/storeList",
          name: "storeList",
          label: "门店",
          icon: "office-building",
          url: "StoreList/Index",
        },
        {
          path: "/vip",
          name: "vip",
          label: "会员",
          icon: "star-off",
          url: "Vip/Index",
        },
        {
          path: "/account",
          name: "account",
          label: "账户",
          icon: "user",
          url: "Account/Index",
        },
        {
          path: "/operation",
          name: "operation",
          label: "运营",
          icon: "s-promotion",
          url: "Operation/Index",
        },
        {
          path: "/setting",
          name: "setting",
          label: "设置",
          icon: "setting",
          url: "Setting/Index",
        },
      ],
      // menu: [],
    };
  },
  methods: {
    Addsuper() {
      this.$store.commit("selectMenu", {
        name: "mall",
        path: "/mall",
        label: "超人",
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // 因为VueRouter已经全局使用，所以可以直接调this.$router
      this.$router.push({
        name: item.name,
      });
      // 用编程式路由导航目的便于-用于面包屑
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      //返回Menu数组中没有chirldren属性的对象
      return this.menu.filter((item) => !item.children);
      // return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      //返回menu数组中有chirldren属性的对象
      return this.menu.filter((item) => item.children);
      // return this.asyncMenu.filter((item) => item.children);
    },
    // use vuex and $store to obtain data[isCollapse]
    isCollapse() {
      // console.log(this.$store.state);
      return this.$store.state.tab.isCollapse;
    },
    // 权限管理-获取menu
    // asyncMenu() {
    //   return this.$store.state.tab.menu;
    // },
  },
  mounted() {
    // console.log("@@", this.$store.state.tab.menu);
  },
  //测试取到路由的信息 $rooter.options.routes
  // created() {
  //   const menuInfo = this.$router.options.routes;
  //   console.log("路由信息menu:", menuInfo);

  // },
};
</script>

<style lang="less" scoped>
.super {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  margin-top: 15px;
  height: 45px;
  border-radius: 15px;
  display: block;

  // visibility: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
.el-menu h3::before {
  content: " ";
  display: block;
  width: 20px;
  // background: url("../assets/img/super.png") center center no-repeat;
  // background-size: 15px auto;
}
.el-menu {
  // vh是屏幕视角
  height: 100vh;
  // height:100%;
  border: none;
  h3 {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    line-height: 39px;
    color: #fff;
  }
}
.el-menu-item,
.el-submenu__title {
  font-size: 16px;
}
</style>