<template>
  <div class="header">
      <!-- 1.匿名插槽 -->
      <!-- <slot></slot> -->
      <!-- <slot name='default'></slot> -->
      <!-- 2.具名插槽 -->
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header{
    background-color: #ccc;
}
</style>