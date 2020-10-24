<template>
  <div class="m-istyle">
    <dl class="movie" @mouseover="over">
      <dt>{{ navList.title }}</dt>
      <dd
        v-for="(subTitle, index) in navList.subTitle"
        :key="index"
        :data-type="subTitle.tab"
        :class="{ active: subTitle.tab == kind }"
      >
        {{ subTitle.name }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(movie, index) in navList.list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="movie.image" class="image" />
          <div class="movie-info">
            <div class="info">
              <span v-if="!movie.preShow">
                观众评
                <i>{{ movie.mk }}</i>
              </span>
              <span v-else>
                <i>{{ movie.wish }}</i>
                人想看
              </span>
              <h6>{{ movie.nm }}</h6>
            </div>
            <el-button type="text" class="button">{{
              movie.preShow ? "预售" : "购票"
            }}</el-button>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      kind: "hot"
    };
  },
  methods: {
    over(e) {
      if (e.target.tagName.toLowerCase() != "dd") {
        return;
      }
      this.kind = e.target.getAttribute("data-type");
      console.log(this.kind);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
