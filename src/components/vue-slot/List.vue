<template>
  <div>
      <h2>列表内容</h2>
      <Header>
          <!-- 1.匿名插槽 -->
          <!-- <span>匿名插槽的内容</span> -->
          <!-- 2.具名插槽 -->
          <template v-slot:left>
              <span>列表左侧</span>
          </template>
          默认内容
          <template v-slot:right>
              <span>列表右侧</span>
          </template>
      </Header>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>