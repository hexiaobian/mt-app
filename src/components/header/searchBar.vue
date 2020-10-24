<template>
  <el-row class="m-header-searchbar search-panel">
    <el-col :span="3" class="left">
      <a href="#">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
        />
      </a>
    </el-col>
    <el-col :span="21" class="center">
      <el-row class="wrapper">
        <el-col>
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="isFocus"
            @blur="isBlur"
            @input="input"
          ></el-input>
          <el-button style="color:#000" icon="el-icon-search"></el-button>
          <dl class="historyList" v-show="!searchWord && showHis">
            <dt>
              <span>最近搜索</span>
              <span>删除搜索历史</span>
            </dt>
            <dd v-for="item in searchHistory" :key="item">
              <router-link :to="{ name: 'goods', params: { name: item } }">
                {{ item }}
              </router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="searchWord">
            <dd v-for="item in searchList" :key="item">
              <router-link :to="{ name: 'goods', params: { name: item } }">
                {{ item }}
              </router-link>
            </dd>
          </dl>
        </el-col>
      </el-row>
      <el-row class="suggest">
        <el-col>
          <router-link
            v-for="item in suggestList"
            :key="item"
            :to="{ name: 'suggest', params: { name: item } }"
          >
            {{ item }}
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import api from "@/api/api.js";
// console.log(api);
export default {
  data() {
    return {
      searchWord: "",
      showHis: false,
      searchList: [],
      searchHistory: ["哈哈哈", "嘿嘿嘿"],
      suggestList: [
        "北京海洋馆",
        "北京动物园",
        "富国海底世界",
        "颐和园",
        "北京欢乐谷"
      ]
    };
  },
  computed: {},
  created() {
    api.getSearchHotWords().then(res => (this.suggestList = res.data.data));
  },
  methods: {
    input() {
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter(e => {
          return e.indexOf(this.searchWord) > -1;
        });
      });
    },
    isFocus() {
      this.showHis = true;
    },
    isBlur() {
      this.showHis = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/topbar.scss";
</style>
