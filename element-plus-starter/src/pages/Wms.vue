<template>
  <div id="container">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside>
          <Aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/Aside.vue";
import Header from "../components/Header.vue";

export default {
  setup() {
    return {
    };
  },

  components: {
    Aside,
    Header
  },
};
</script>

<style scoped>
#container {
  margin: 0;
  height: 100%;
}

#container .el-container {
  height: 100%;
}
.el-header {
  background-color: #44505c;
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0;
}

.el-aside {
  height: 100%;
  width: 160px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
}
</style>