<template>
  <el-row>
    <div class="logo">WMS管理系统</div>
    <div class="header"></div>
    <el-popover
      placement="bottom"
      trigger="hover"
      content="你有12条待处理任务"
    >
      <template #reference>
        <div class="alerts">
          <el-badge :value="12" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
      </template>
    </el-popover>
    <div class="personal">
      <i class="el-icon-user"></i>
    </div>
  </el-row>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  margin: 0;
  width: 160px;
  background-color: "#44505c";
  line-height: 60px;
  font-weight: 500;
  color: white;
}
.header {
  width: calc(100% - 260px);
  background-color: "#44505c";
}
.alerts {
  width: 32px;
  height: calc(100% - 28px);
  background-color: white;
  margin-left: 13px;
  margin-right: 5px;
  margin-top: 14px;
  margin-bottom: 14px;
  color: "#44505c";
  border-radius: 13px;
  border: 1px;
}
.personal {
  width: 32px;
  height: calc(100% - 28px);
  background-color: white;
  margin-left: 5px;
  margin-right: 13px;
  margin-top: 14px;
  margin-bottom: 14px;
  color: "#44505c";
  border-radius: 13px;
  border: 1px;
}
i {
  line-height: 32px;
  cursor: pointer;
}
</style>