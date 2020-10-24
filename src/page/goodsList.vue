<template>
  <div class="page-product" v-document-scroll="scroll">
    <el-row class=" m-crumbs">
      <el-col :span="24">
        <crumbs />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20">
        <div class="m-product-categroy">
          <m-nav name="分类" :dataList="classicList" />
          <m-nav name="区域" :dataList="regionList" />
        </div>
        <div class="m-products-list">
          <sub-nav />
          <list v-for="good in goodsList" :key="good.type" :good="good" />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="subnav">
          <div class="map">
            <img src="@/assets/img/map.png" alt="map" />
          </div>
          <div class="recommend">
            <h3>猜你喜欢</h3>
            <recommand
              v-for="recommend in recommendList"
              :key="recommend.itemId"
              :recommend="recommend"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import crumbs from "@/components/products/crumbs.vue";
import MNav from "@/components/products/nav.vue";
import SubNav from "@/components/products/subNav.vue";
import list from "@/components/products/list.vue";
import recommand from "@/components/products/recommend.vue";
import api from "@/api/api";
export default {
  components: {
    crumbs,
    MNav,
    SubNav,
    list,
    recommand
  },
  data() {
    return {
      classicList: [],
      regionList: [],
      goodsList: [],
      recommendList: []
    };
  },
  created() {
    api.getClassify().then(res => (this.classicList = res.data.data));
    api.getRegionList().then(res => (this.regionList = res.data.data));
    api.getGoodsList().then(res => (this.goodsList = res.data.data));
    api.getRecommendList().then(res => (this.recommendList = res.data.data));
  },
  methods: {
    scroll(e) {
      if (e.target.documentElement.scrollTop > 240) {
        document.getElementsByClassName("map")[0].classList.add("sticky");
      } else {
        document.getElementsByClassName("map")[0].classList.remove("sticky");
      }
      console.log(e.target.documentElement.scrollTop);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
