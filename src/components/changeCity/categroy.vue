<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="letter in lettersList" :key="letter">
        <span>{{ letter.toUpperCase() }}</span>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item, index) in letterCities"
      :key="index"
    >
      <dt>
        {{ index }}
      </dt>
      <dd>
        <span v-for="i in item" :key="i">
          {{ i }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data() {
    return {
      cities: []
    };
  },
  mounted() {
    api.getCity().then(res => (this.cities = res.data.data));
  },
  computed: {
    lettersList() {
      return "abcdefghijklmnopqrstuvwxyz".split("");
    },
    letterCities() {
      let newCities = {};
      this.cities.forEach(item => {
        if (newCities[item.firstChar]) {
          newCities[item.firstChar].push(item.name);
        } else {
          newCities[item.firstChar] = [];
          newCities[item.firstChar].push(item.name);
        }
      });
      return newCities;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss";
</style>
