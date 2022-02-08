<template>
  <div>
    <p>我是爷爷</p>
    <Sun />
  </div>
</template>

<script>
import Sun from "./sun.vue";
export default {
  components: {
    Sun,
  },
//   1.对象方式
  provide: {
    money: 100000,
  },
//   2.函数方式【常用,可以识别data中的数据】
  
};
</script>

<style lang="less" scoped>
</style>