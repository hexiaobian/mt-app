<template>
  <div class="page-login">
    <div class="login-header">
      <div class="logo"></div>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt="图片"
        />
      </div>
      <form class="form">
        <div class="tips" v-if="tip">
          <i class="el-icon-remove"></i>
          {{ tip }}
        </div>
        <div class="ways">
          <span>账号登录</span>
          <span>手机动态码登录<i class="el-icon-mobile-phone"></i></span>
        </div>
        <el-input
          v-model="username"
          placeholder="手机号"
          @focus="borderChange(0)"
          @blur="borderNone(0)"
        >
          <span slot="prepend">+86 &gt;</span>
        </el-input>
        <el-input
          v-model="password"
          placeholder="密码"
          type="password"
          prefix-icon="el-icon-lock"
          @focus="borderChange(1)"
          @blur="borderNone(1)"
        >
        </el-input>
        <div class="forget">
          <a>忘记密码?</a>
        </div>
        <el-button class="btn-login" @click="toLogin">登录</el-button>
        <div class="signup-guide">
          还没有账号？
          <router-link :to="{ name: 'register' }">免费注册</router-link>
        </div>
        <div class="oauth-wrapper">
          <div class="title-wrapper">
            <div class="title">用合作网站账号登录</div>
          </div>
          <div class="oauth">
            <div class="oauth__link"></div>
            <div class="oauth__link--weibo"></div>
          </div>
        </div>
      </form>
    </div>
    <footer>
      <ul>
        <li v-for="(title, index) in footTitle" :key="index">
          <a href="#">{{ title }}</a>
        </li>
      </ul>
      <p>
        &copy;2020 美团网团购 meituan.com 京ICP证070791号
        京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      tip: "",
      username: "",
      password: "",
      rePassword: "",
      footTitle: ["关于美团", "加入我们", "商家入驻", "帮助中心", "美团手机版"]
    };
  },
  methods: {
    toLogin() {
      api
        .getLogin({ userName: this.username, password: this.password })
        .then(res => {
          console.log(res);
          let ureg = /^1[34578]\d{9}$/;
          let preg = /\w{6,16}/g;
          if (res.data.status == "fail") {
            if (this.username == "") {
              this.tip = res.data.msg;
            } else if (this.password == "") {
              this.tip = res.data.msg;
            } else if (!this.username.match(ureg)) {
              this.tip = "用户名必须为11位的手机号码";
            } else if (!this.password.match(preg)) {
              this.tip = res.data.msg;
            } else {
              this.tip = res.data.msg;
            }
          } else {
            this.$router.push({
              name: "index",
              params: {
                userName: this.username
              }
            });
          }
        });
    },
    borderChange(i) {
      document.getElementsByClassName("el-input")[i].classList.add("focus");
    },
    borderNone(i) {
      document.getElementsByClassName("el-input")[i].classList.remove("focus");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
