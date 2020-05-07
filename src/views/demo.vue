<template>
  <div class="demo">
    <navMenu />
    <!-- 阴影控制 -->
    <boxShadow/>
    <div class="r"></div>
  </div>
</template>

<script>
import navMenu from '@/components/navMenu'
import boxShadow from '@/components/boxShadow'
export default {
  name: 'demo',
  setup () {},
  components: {
    navMenu,
    boxShadow
  }
}
</script>
<style lang="scss">

</style>
