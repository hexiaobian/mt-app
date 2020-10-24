<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        {{ name }}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <h3 class="select-title">{{ name }}</h3>
        <span v-for="v in dataList" :key="v.id">{{ v.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["name","dataList"]
};
</script>
