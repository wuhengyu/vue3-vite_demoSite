<template>
  这是Home页面
  <hr />
  <div class="wrap">
    <p>count: {{ count }}</p>
  </div>
  <div>
    <el-button @click="incrementCount" type="primary">增加数量</el-button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const count = computed(() => store.state.count);

onMounted(() => {
  console.log("count:", count.value);
});

const incrementCount = () => {
  store.commit("increment");
};
</script>

<style lang="scss">
.wrap {
  background: yellow;
  p {
    color: blue;
    font-size: 24px;
  }
}
</style>