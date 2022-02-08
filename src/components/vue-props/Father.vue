<template>
  <div>
    <p>我是Father组件</p>
    <!-- 使用 -->
    <!-- <Son1 msg='我是父组件传递给子组件的静态数据' :msg1='msg1' :run='run1'/> -->
    <Son1
      title="Hello"
      :likes="likes"
      :propB="propB"
      propC="fly"
      :propD="propD"
      :propE="propE"
      propF="success"
      :propG="propG1"
    />
    <Son2 :msg="msg" @changeMsg="changeMsg1" ref="Son2" />
    <button @click="getSon2">通过$refs获取组件的内容</button>
    <button @click="getChildren">在父组件获得$children</button>
  </div>
</template>

<script>
// 引入Son1
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
export default {
  // 注册
  components: {
    Son1,
    Son2,
  },
  data() {
    return {
      //   msg1:'我是父组件传递给子组件的动态数据'
      msg: "我是Son2的msg数据",
      likes: 10,
      propB: "11",
      propD: 200,
      propE: {
        age: 18,
      },
    };
  },
  methods: {
    //   run1(){
    //       alert('跑跑')
    //   }
    propG1(val) {
      alert(val);
    },
    // changeMsg1(){
    //     this.msg = '我是修改后的msg111111111111111'
    // }
    changeMsg1(val) {
      this.msg = val;
    },
    getSon2() {
      console.log(this.$refs.Son2);
    },
    getChildren(){
      console.log(this.$children);
      console.log(this.$children[0]);
    }
  },
};
</script>

<style lang="less" scoped>
</style>