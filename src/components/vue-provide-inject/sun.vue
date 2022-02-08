<template>
  <div>
    <p>我是孙子</p>
    <!-- <p>{{money}}</p> -->
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  // 1.数组的方式
  // inject:['money']
  // 2.对象的方式 【可以在inject中重命名，避免重名问题】
  inject: {
    info: {
      from: "money",
    },
  },
};
</script>

<style lang="less" scoped>
</style>