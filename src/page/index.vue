<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <right-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :navList="movieList" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from "../components/main/leftNav.vue";
import RightLife from "../components/main/rightLife.vue";
import container from "../components/main/container.vue";

export default {
  data() {
    return {
      movieList: {
        title: "猫眼电影",

        subTitle: [
          {
            name: "正在热映",
            tab: "hot"
          },
          {
            name: "即将上映",
            tab: "start"
          }
        ],
        list: [
          {
            image:
              "https://p1.meituan.net/movie/0a9b9622ec06bfc1fc0e34676230883d876505.jpg@214w_297h_1e_1c",
            mk: 9.3,
            nm: "七号房的礼物",
            preShow: false,
            wish: 442858
          },
          {
            image:
              "https://p0.meituan.net/moviemachine/4264322771f13bb3d75c5d2df39bb0dd4117547.jpg@214w_297h_1e_1c",
            mk: 0,
            nm: "金刚川",
            preShow: true,
            wish: 58746
          }
        ]
      },
      hotelList: {
        title: "推荐民宿",
        subTitle: [
          "天津",
          "济南",
          "大连",
          "太原",
          "石家庄",
          "秦皇岛",
          "呼和浩特",
          "潍坊",
          "唐山",
          "泰安"
        ],
        list: [
          {
            title:
              "新百广场【灰粉】丽鼎公寓，自助入住 | 华强广场，吃喝玩乐商圈，出行方便，欢迎入住",
            coverImage:
              "https://img.meituan.net/phoenix/1f93c192c83656b74f392e25764c3d1f467446.jpg",
            locationArea: "新百广场",
            price: 110
          },
          {
            title:
              "【董小姐】法式宫廷高级美学ins风/巨幕投影影院享受/长安万达 谈固地铁/火车东站机场",
            coverImage:
              "https://img.meituan.net/phoenix/a6e8bb875ca8db8231950c7720f5d1ea1711262.jpg",
            locationArea: "桃园",
            price: 151
          }
        ]
      }
    };
  },

  components: {
    MMenu,
    RightLife,
    container
  }
};
</script>

<style></style>
