<template>
  <div class="banner">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerArray" :key="index">
        <img :src="item.href" alt="" />
      </swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white home-span"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "banner",
  data() {
    return {
      swiperOption: {
        loop: true,
        // effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      bannerArray: [
        {
          href: require("@/assets/01.jpg"),
        },
        {
          href: require("@/assets/02.jpg"),
        },
        {
          href: require("@/assets/03.jpg"),
        },
        {
          href: require("@/assets/04.jpg"),
        },
        {
          href: require("@/assets/05.jpg"),
        },
        {
          href: require("@/assets/06.jpg"),
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: px(314);
  margin-bottom: px(-15);
  img {
    display: block;
    width: 100%;
  }
  .swiper-pagination {
    text-align: right;
    transform: translate3d(px(-30), 0, 0);
  }
}
</style>
