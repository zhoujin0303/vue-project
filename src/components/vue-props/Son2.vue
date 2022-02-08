<template>
  <div>
    <hr />
    <p>我是Son2组件</p>
    <p>{{ msg }}</p>
    <button @click="changeFather">点击我修改msg的数据</button>
    <br />
    <button @click="getFather">通过$parent获取直接父组件的信息</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],
  methods: {
    changeFather() {
      this.$emit("changeMsg", "msg22222222222222");
    },
    getFather() {
      console.log(this.$parent.msg);
    },
  },
};
</script>

<style lang="less" scoped>
</style>