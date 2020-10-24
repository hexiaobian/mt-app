<template>
  <div class="page-register">
    <div class="header">
      <header>
        <div class="site-logo"></div>
        <div class="login">
          已有美团账号？
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <div class="item">
        <label>手机号</label
        ><el-input v-model="username" @change="userInput"></el-input>
        <span class="tip" v-if="!tip1">注册成功后，全美团通用</span>
        <div class="wrong" v-else>
          <span v-if="isFail1">
            <i class="el-icon-remove"></i>
            {{ tip1 }}</span
          >
          <span v-else>
            <i class="el-icon-success"></i>
          </span>
        </div>
      </div>
      <button class="fork">免费获取短信验证码</button>
      <div class="item">
        <label>短信动态码</label
        ><el-input v-model="identifyCode" @change="identify"></el-input>
        <div class="wrong" v-if="tip2">
          <span v-if="isFail2">
            <i class="el-icon-remove"></i>
            {{ tip2 }}</span
          >
          <span v-else>
            <i class="el-icon-success"></i>
          </span>
        </div>
      </div>
      <div class="item">
        <label>创建密码</label
        ><el-input
          v-model="password"
          type="password"
          @change="gitPassWord"
        ></el-input>
        <div class="wrong" v-if="tip3">
          <span v-if="isFail3">
            <i class="el-icon-remove"></i>
            {{ tip3 }}</span
          >
          <span v-else>
            <i class="el-icon-success"></i>
          </span>
        </div>
        <span></span><span></span><span></span>
      </div>
      <div class="item">
        <label>确认密码</label
        ><el-input
          v-model="repassword"
          type="password"
          @change="reformPassword"
        ></el-input>
        <div class="wrong" v-if="tip4">
          <span v-if="isFail4">
            <i class="el-icon-remove"></i>
            {{ tip4 }}</span
          >
          <span v-else>
            <i class="el-icon-success"></i>
          </span>
        </div>
      </div>
      <div class="item">
        <el-button @click="register">同意以下协议并注册</el-button>
      </div>
      <div class="item">
        <a href="#">《美团点评用户服务协议》</a>
        <a href="#">《美团点评用户隐私政策》</a>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  data() {
    return {
      tip1: "",
      isFail1: true,
      tip2: "",
      isFail2: true,
      tip3: "",
      isFail3: true,
      tip4: "",
      isFail4: true,
      username: "",
      password: "",
      repassword: "",
      identifyCode: ""
    };
  },
  methods: {
    userInput() {
      let ureg = /^1[34578]\d{9}$/;
      if (this.username == "") {
        this.tip1 = "请输入手机号码";
        this.isFail1 = true;
      } else if (!this.username.match(ureg)) {
        this.tip1 = "请输入正确的11位手机号码";
        this.isFail1 = true;
      } else {
        this.tip1 = true;
        this.isFail1 = false;
      }
    },
    identify() {
      if (!this.identifyCode) {
        this.tip2 = "请输入短信动态码";
      } else if (this.identifyCode != "2578") {
        this.tip2 = "输入错误，请重新输入";
      } else {
        this.tip2 = true;
        this.isFail2 = false;
      }
    },
    gitPassWord() {
      let preg = /\w{8,16}/g;
      if (!this.password) {
        this.tip3 = "请输入密码";
      } else if (!this.password.match(preg)) {
        this.tip3 = "密码太短，至少8个字符";
      } else {
        this.isFail3 = false;
        this.tip3 = true;
      }
    },
    reformPassword() {
      if (!this.repassword) {
        this.tip4 = "请再次输入密码";
      } else if (this.repassword != this.password) {
        this.tip4 = "前后密码不一致";
      } else {
        this.isFail4 = false;
        this.tip4 = true;
      }
    },
    register() {
      api
        .getRegister({
          userName: this.username,
          password: this.password,
          rePassword: this.repassword
        })
        .then(res => {
          if (res.data.status == "fail") {
            this.tip1 = "该用户已存在！";
            return;
          } else {
            this.$router.push({
              name: "login"
            });
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
