<template>
  <dl class="classic">
    <dt>{{ name }}</dt>
    <dt>全部</dt>
    <dd>
      <m-select
        v-for="item in dataList"
        :key="item.type"
        :name="item.title"
        :dataList="item.subList"
      />
    </dd>
  </dl>
</template>

<script>
import MSelect from "@/components/products/select.vue";

export default {
  components: {
    MSelect
  },
  props: ["name", "dataList"],
  data() {
    return {};
  }
};
</script>
