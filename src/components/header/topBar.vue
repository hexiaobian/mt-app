<template>
    <el-row class="m-header m-header-topbar">
      <el-col :span="10">
        <geo/>
      </el-col>
      <el-col :span="14">
        <m-nav/>
      </el-col>
    </el-row>
</template>
<script>
import geo from './geo.vue'
import MNav from './MNav.vue'

export default {
  components: {
    geo,
    MNav
  }

}
</script>
<style lang="scss">
</style>
