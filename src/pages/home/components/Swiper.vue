<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://b1-q.mafengwo.net/s15/M00/71/03/CoUBGV5ObLqALH09AB_TNctu4-0320.png?imageMogr2%2Finterlace%2F1'
      }, {
        id: '002',
        imgUrl: 'https://p1-q.mafengwo.net/s15/M00/F1/D5/CoUBGV5NBYaAHJkXACSOOvUzwoY815.png?imageMogr2%2Finterlace%2F1'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height: 0
    padding-bottom 31.25%
    background #eee
    .swiper-img
      width 100%
</style>>
