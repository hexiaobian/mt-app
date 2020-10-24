<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }"
      >{{ position }}美团</el-breadcrumb-item
    >
    <el-breadcrumb-item>{{ position }}火锅</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      position: this.$store.state.position
    };
  }
};
</script>
