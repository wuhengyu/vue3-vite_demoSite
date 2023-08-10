<template>
  这是Home页面
  <hr />
  <div class="wrap">
    <p>count: {{ count }}</p>
  </div>
</template>
<script setup>
import { useStore, computed } from "vuex";

const store = useStore();
const count = computed(() => store.state.count);
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