<template>
  <div class="page-index">
    <div class="m-menu">
      <dl class="nav" @mouseleave="hideSubnav">
        <dt>全部分类</dt>
        <dd
          v-for="(item, index) in menuList"
          :key="index"
          @mouseenter="showSubnav(item)"
        >
          <i :class="item.type"></i>
          {{ item.name }}
          <i class="arrow"></i>
        </dd>
      </dl>
      <div
        class="detail"
        v-show="showData"
        @mouseenter="showSelf"
        @mouseleave="hideSubnav"
      >
        <template v-for="(item, index) in showData">
          <h4 :key="index">{{ item.title }}</h4>
          <span v-for="v in item.items" :key="v">{{ v }}</span>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api.js";

export default {
  data() {
    return {
      menuList: [],
      showData: null,
      timer: null
    };
  },
  created() {
    api.getNav().then(res => (this.menuList = res.data.data));
  },
  methods: {
    showSubnav(navTitle) {
      this.showData = navTitle.items;
    },
    hideSubnav() {
      this.timer = setTimeout(() => {
        this.showData = null;
      }, 200);
    },
    showSelf() {
      clearTimeout(this.timer);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
