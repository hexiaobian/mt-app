<template>
  <el-rate
    v-model="value"
    disabled
    text-color="#ff9900"
    score-template="{value}"
  >
  </el-rate>
</template>

<script>
export default {
  props: ["value"]
};
</script>
