<template>
  <div :class="['flex-user', menuOpen || 'open']">
    <div class="box">
      <div class="item">
        <img src="@/assets/home.png" alt="" />
        <p>首页</p>
      </div>
      <div class="item">
        <img src="@/assets/ordel.png" alt="" />
        <p>订单</p>
      </div>
      <div class="item" v-if="!menuOpen" @click="toggleFn">
        <img src="@/assets/icon_user.png" alt="" />
        <p>我的</p>
      </div>
      <div class="item" v-else>
        <img src="@/assets/login.png" alt="" />
        <p>登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["isOpen"],
  data() {
    return {
      menuOpen: this.isOpen,
    };
  },
  watch: {
    isOpen() {
      this.menuOpen = this.isOpen;
    },
  },
  methods: {
    toggleFn() {
      this.menuOpen = !this.menuOpen;
      this.$emit("update:isOpen", this.menuOpen);
    }
  }
};
</script>
<style lang="scss" scoped>
.flex-user {
  position: fixed;
  right: px(30);
  bottom: px(100);
  background: #fff;
  display: flex;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  height: px(100);
  border-radius: px(50);
  width: px(460);
  overflow: hidden;
  transition: 0.5s;
  .box {
    transition: 0.3s;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(0);
    width: px(460);
    height: 100%;
    .item {
      width: px(110);
      img {
        display: block;
        width: px(44);
        height: px(44);
        margin: auto;
      }
      p {
        text-align: center;
        white-space: nowrap;
      }
    }
  }
}
.open {
  width: px(100);
  .box {
    transform: translateX(px(25));
  }
}
</style>
