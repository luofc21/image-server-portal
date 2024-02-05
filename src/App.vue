<template>
  <router-view />
</template>

<script setup>
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 6px;
  height: 1px;
}

::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: var(--scrollbar-bg-color);
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px transparent;
  border-radius: 2px;
  background-image: var(--scrollbar-bg-image);
}
</style>

