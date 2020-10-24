<template>
  <div class="choose-wrap" v-document-click="changeShow">
    <div class="choose" @click="change">
      {{ mValue }}
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: flag }">
        <h2>
          {{ value }}
        </h2>
        <div class="wrapper">
          <div
            class="col"
            v-for="(province, index) in newProvince"
            :key="index"
          >
            <span
              :class="['mt-item', { active: isSelected == city.name }]"
              v-for="city in province"
              :key="city.provinceCode"
              @click="chooseCity(city, $event)"
            >
              {{ city.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value", "mName", "datas", "flag"],
  data() {
    return {
      isSelected: "",
      mValue: this.value
    };
  },
  mounted() {
    console.log("-====", this.isShow);
  },
  methods: {
    change(e) {
      e.stopPropagation();
      this.$emit("change-show", true);
    },
    changeShow() {
      this.$emit("change-show", false);
    },
    chooseCity(value, e) {
      e.stopPropagation();
      this.mValue = value.name;
      this.isSelected = value.name;
      this.isShow = false;
      this.$emit("click-change", value);
    }
  },
  computed: {
    newProvince() {
      let cols = Math.ceil(this.datas.length / 12);
      let newProvince = [];
      for (let i = 0; i < cols; i++) {
        newProvince.push(this.datas.slice(12 * i, 12 + 12 * i));
      }
      return newProvince;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>
