<template>
  <el-main>
    <div class="login" :style="{ boxShadow: `var(--el-box-shadow-base)` }">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item label="账号">
            <el-input type="input" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </div>
  </el-main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.el-main {
  height: 100%;
  /* background-color: white; */
  background-image: url('../assets/login_background.jpeg');
}
.login {
  background-color: white;
  width: 360px;
  height: 260px;
  margin: auto;
  margin-top: 15%;
  border-radius: 5px;
}
.el-form {
	width: 300px;	
	margin-left: 30px;
	padding-top: 50px;
}
</style>