<template>
  <dl>
    <dt>
      <img :src="recommend.imgUrl" />
    </dt>
    <dd>
      <h3>{{ recommend.title }}</h3>
      <p class="score-line">
        <rate :value="recommend.score" />
        <span>{{ recommend.commentNum }}评价</span>
      </p>
      <p>{{ recommend.areaName }}</p>
      <span
        >￥<i>{{ recommend.avgPrice }}</i
        >起</span
      >
    </dd>
  </dl>
</template>
<script>
import rate from "./rate.vue";
export default {
  props: ["recommend"],
  components: {
    rate
  }
};
</script>
