<template>
  <div class="page-changeCity">
    <el-row class="m-iselect">
      <span>按省份选择：</span>
      <change-city
        value="省份"
        :datas="provinceList"
        :flag="isShow1"
        @change-show="changeProvince"
        @click-change="chooseProvince"
        class="province"
      />
      <change-city
        value="城市"
        :datas="cityList"
        :flag="isShow2"
        @change-show="changeCity"
        @click-change="chooseCity"
        :class="{ city: isQuit }"
      />

      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in cities"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot-city :cityList="hotCity" name="热门城市" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hot-city :cityList="hisCity" name="最近访问" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <categroy />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import changeCity from "../components/changeCity/select.vue";
import hotCity from "../components/changeCity/hotCity.vue";
import categroy from "../components/changeCity/categroy.vue";
import api from "@/api/api";
export default {
  data() {
    return {
      isQuit: true,
      searchWord: "",
      loading: false,
      isShow1: false,
      isShow2: false,
      cities: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津"
      ],
      provinceList: [],
      cityList: [],
      hotCity: [],
      hisCity: []
    };
  },
  components: {
    changeCity,
    hotCity,
    categroy
  },
  created() {
    api.getProvince().then(res => {
      console.log(res);
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });

    api.getHotCity().then(res => (this.hotCity = res.data.data));
    api.getHisCity().then(res => (this.hisCity = res.data.data));
  },
  methods: {
    remoteMethod() {
      console.log(111);
    },
    changeProvince(flag) {
      this.isShow1 = flag;
      if (flag) {
        this.isShow2 = false;
      }
    },
    changeCity(flag) {
      this.isShow2 = flag;
      if (flag) {
        this.isShow1 = false;
      }
    },
    chooseProvince(e) {
      this.isQuit = false;
      this.cityList = e.cityInfoList;
      if (this.isShow1) {
        this.isShow1 = false;
      }
    },
    chooseCity(value) {
      if (this.isShow2) {
        this.isShow2 = false;
      }
      this.$store.dispatch("changeCity", value.name);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>
