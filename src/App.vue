<template>
  <div id="app">
    <el-row>
      <router-view name="state"></router-view>
      <router-view name="tabbar"></router-view>
      <div class="view">
        <router-view/>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" src="./assets/scss/global.scss" />
