<template>
  <dl>
    <dd
      v-for="(opt, index) in opts"
      :key="index"
      :class="{ 's-price': index == 1 }"
    >
      {{ opt }}
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      opts: ["智能排序", "价格排序", "人气最高", "评价最高"]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>
