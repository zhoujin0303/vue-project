<template>
  <div>
    <div class="tab">
      <div class="tabItem" @click="changeTab('Home')">Home链接</div>
      <div class="tabItem" @click="changeTab('Personal')">Personal链接</div>
    </div>

<!--  -->
    <keep-alive :exclude="['Home']">
      <!-- 动态组件 -->
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Personal from "./Personal.vue";
export default {
  data() {
    return {
      comName: "Home",
    };
  },
  components: {
    Home,
    Personal,
  },
  methods: {
    changeTab(com) {
      this.comName = com;
    },
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  .tabItem {
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
  }
}
</style>