<template>
  <div>
    <p>我是Son1组件</p>
    <hr />
    <!-- <p>{{msg}}</p>
    <p>{{msg1}}</p>
    <button @click='run'>点击我，父组件向子组件传递函数数据</button> -->
    <p>{{ title }}</p>
    <p>{{ likes }}</p>
    <p>{{ propB }}</p>
    <p>{{ propC }}</p>
    <p>{{ propD }}</p>
    <p>{{ propE }}</p>
    <p>{{ propF }}</p>
    <p>{{ propG('我是从子组件传递回来的数据') }}</p>
  </div>
</template>

<script>
export default {
  // 1.数组模式
  // props:['msg','msg1','run']
  // 2.对象模式 希望每个 prop 都有指定的值类型
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    title: String,
    likes: Number,
    // 多个可能的类型 为组件的 prop 指定验证要求
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: "hello" };
      },
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    propG:Function
  },
};
</script>

<style lang="less" scoped>
</style>