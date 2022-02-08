<template>
  <div class="aside">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      default-active="Dashboard"
    >
      <el-sub-menu index="data">
        <template #title>
          <i class="el-icon-coin"></i>
          <span>数据维护</span>
        </template>
        <el-menu-item index="customer" @click="handleClick">
          <template #title>
            <i class="el-icon-user"></i>
            <span>客户管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="goods" @click="handleClick">
          <template #title>
            <i class="el-icon-goods"></i>
            <span>商品管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="warehouse">
        <template #title>
          <i class="el-icon-files"></i>
          <span>单据维护</span>
        </template>
        <el-menu-item index="checkin" @click="handleClick">
          <template #title>
            <i class="el-icon-document-add"></i>
            <span>入库管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index="checkout" @click="handleClick">
          <template #title>
            <i class="el-icon-document-remove"></i>
            <span>入库管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="storage" @click="handleClick">
        <i class="el-icon-house"></i>
        <span>库存管理</span>
      </el-menu-item>
      <el-menu-item index="assignment" @click="handleClick">
        <template #title>
          <i class="el-icon-connection"></i>
          <span>任务管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="accounting" @click="handleClick">
        <i class="el-icon-money"></i>
        <span>财务管理</span>
      </el-menu-item>
      <el-menu-item index="settings" @click="handleClick">
        <i class="el-icon-setting"></i>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
// import { onMounted, watch, ref } from "vue";

export default {
  name: "Aside",
  props: {
    //     msg: String
  },
  setup() {
    const _router = useRouter();
    const _route = useRoute();

    // const curRouteName = ref("user");

    const handleClick = (menu) => {
      console.log("Navigating to : " + menu.index);
      _router.push({
        name: menu.index,
      });
      console.log(_route.fullPath);
    };

    // watch(
    //   () => _route.name,
    //   (newName) => {
    //     curRouteName.value = newName;
    //   }
    // );

    // onMounted(() => {
    //   tooglePage(curRouteName.value);
    // });

    // return {
    //   curRouteName,
    // };
    const handleOpen = (key, keyPath) => {
      console.log("key:" + key);
      console.log("keyPath:" + keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
      handleClick,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- style scoped lang="sass"-->
<style scoped>
.aside {
  height: 100%;
}
.el-menu {
  height: calc(100% - 0px);
}
</style>
