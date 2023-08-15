<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>

<style >
html,
body {
  /* margin: 0;
  padding: 0; */
  height: 100%;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
