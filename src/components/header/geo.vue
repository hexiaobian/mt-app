<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{ $store.state.position }}
      [
      <a href="/" v-for="city in nearCity" :key="city.id">
        {{ city.name }}
      </a>
      ]
    </div>
    <router-link class="changeCity" :to="{ name: 'changeCity' }"
      >切换城市</router-link
    >
    <div class="m-user">
      <router-link class="login" :to="{ name: 'login' }" v-if="!name"
        >立即登录</router-link
      >
      <router-link
        class="login"
        :to="{ name: 'index' }"
        @click.native="reloadPage"
        v-else
        >{{ name }}</router-link
      >
      <router-link class="register" :to="{ name: 'register' }" v-if="!name"
        >注册</router-link
      >
      <router-link
        class="register"
        :to="{ name: 'index' }"
        v-else
        @click.native="goStrange"
        >退出</router-link
      >
    </div>
  </div>
</template>

<script>
import api from "@/api/api.js";
export default {
  data() {
    return {
      provinceList: [],
      nearCity: [],
      userName: this.$route.params.userName
    };
  },
  created() {
    api.getPosition().then(res => (this.nearCity = res.data.data.nearCity));
  },
  computed: {
    name: {
      get() {
        return this.userName ? this.userName : "";
      },
      set(val) {
        this.userName = val;
      }
    }
  },
  methods: {
    reloadPage() {
        location.reload();
    },
    goStrange() {
      this.userName = undefined;
      console.log(this.userName, this.name);
      location.reload();
      console.log(this.userName, this.name);
    }
  }
};
</script>
