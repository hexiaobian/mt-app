<template>
  <div class="m-life">
    <el-row>
      <el-col :span="24">
        <ul class="nav">
          <li>
            <a href="#" class="takeout">美团外卖</a>
          </li>
          <li>
            <a href="#" class="movie">猫眼电影</a>
          </li>
          <li>
            <a href="#" class="movie">美团酒店</a>
          </li>
          <li>
            <a href="#" class="apartment">民宿/公寓</a>
          </li>
          <li>
            <a href="#" class="business">商家入驻</a>
          </li>
          <li>
            <a href="#" class="movie">美团公益</a>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            />
          </h4>
          <span class="m-life-login-name">Hi，你好</span>
          <el-button round>注册</el-button>
          <el-button round>立即登录</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>一元起</span>
            <em>吃喝玩乐 </em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import slider from './slider.vue'

export default {
  data () {
    return {}
  },
  components: {
    slider
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
