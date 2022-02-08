<template>
  <div id="app">
    <p>我是根组件</p>
    <hr>
    <Father/>
    <!-- <vueProvideInject/> -->
    <!-- <list/> -->
    <!-- <Dycom/> -->
  </div>
</template>

<script>
import Father from './components/vue-props/Father.vue'
import vueProvideInject from './components/vue-provide-inject/GrandFather.vue'
import List from './components/vue-slot/List.vue'
import Dycom from './components/vue-dycom/Dycom.vue'
export default {
  name: "App",
  components: {
    Father,
    vueProvideInject,
    List,
    Dycom
  },
};
</script>

<style lang="less">
</style>
