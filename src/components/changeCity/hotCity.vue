<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ name }}</dt>
      <dd v-for="city in cityList" :key="city.id">
        {{ city.name }}
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["cityList", "name"]
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/hot.scss";
</style>
