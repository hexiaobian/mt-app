<template>
  <dl class="s-item">
    <dt><img :src="good.image" alt="图片" /></dt>
    <dd>
      <h3>{{ good.title }}</h3>
      <rate :value="good.score" />
      <span v-if="good.score > 4.5">很好</span>
      <span v-else-if="good.score > 4.0">好</span>
      <span v-else-if="good.score > 3.5">不错</span>
      <span v-else-if="good.score > 3">一般</span>
      <span v-else>差</span>
      <span>{{ good.score }}分</span>
      <span class="s-item-comment-total"> {{ good.commentNum }}评论 </span>
      <p>
        <span>{{ good.tab[0] }}/{{ good.tab[1] }}</span>
        <span>{{ good.address }}</span>
        <em class="el-icon-location-information" style="color:#FFD000"></em>
        <span>查看地图</span>
      </p>
      <p>
        <span>人均￥{{ good.avgPrice }}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(item, index) in good.dealItems" :key="index">
          <p class="deal-title">
            {{ item.title }}
          </p>
          <span class="deal-price">￥{{ item.price }}</span>
          <span class="deal-old-price">门市价￥{{ item.counterPrice }}</span>
          <span class="deal-sales">已售{{ item.saleNum }}</span>
        </li>
      </ul>
    </dd>
  </dl>
</template>
<script>
import rate from "./rate.vue";
export default {
  components: {
    rate
  },
  props: ["good"]
};
</script>
