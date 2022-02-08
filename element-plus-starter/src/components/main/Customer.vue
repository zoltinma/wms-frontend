<template>
  <el-main class="main-panel">
    <!-- form -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input placeholder="Approved by"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Add</el-button>
    </el-form>

    <!-- tabel -->
    <el-table :data="tableData">
      <el-table-column prop="sequence" label="序号"> </el-table-column>
      <el-table-column prop="id" label="编码"> </el-table-column>
      <el-table-column prop="companyName" label="公司名称"> </el-table-column>
      <el-table-column prop="managerName" label="总经理"> </el-table-column>
      <el-table-column prop="contactName" label="联系人"> </el-table-column>
      <el-table-column prop="contactPhone" label="联系电话"> </el-table-column>
      <el-table-column prop="proucts" label="主要产品"> </el-table-column>
      <el-table-column prop="operations" label="操作"> </el-table-column>
    </el-table>

    <!-- <el-row class="height-test"></el-row> -->
    <!-- affix -->
    <!-- <el-affix position="bottom" :offset="20"> -->
    <el-button class="addNew" type="primary">+</el-button>
    <!-- </el-affix> -->
  </el-main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.main-panel {
  background-color: white;
  border-radius: 5px;
  min-height: 100%;
}
.height-test {
  height: 100px;
  background-color: red;
  margin-left: 20px;
  margin-right: 20px;
}
.addNew {
  position: absolute;
  bottom: 40px;
  right: 40px;
  border-radius: 20px;
}
</style>