<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      ]
    }
  }
}
</script>
