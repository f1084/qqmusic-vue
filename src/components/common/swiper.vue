<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(val,index) in arr" data-swiper-autoplay="3000">
            <a :href="val.linkUrl"><img :src="val.picUrl" class="carousel"></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'carrousel',
        data() {
            return {
                arr:[],
                swiperOption: {
                    notNextTick: true,
                    autoplay: 3000,
                    loop:true,
                    autoplayDisableOnInteraction:false,
                    direction : 'horizontal',
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                    debugger: true
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            let url ='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521'
            this.$http.jsonp(url,{jsonp:'jsonpCallback'}).then(res =>{
                this.arr=res.body.data.slider;
            })
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>
<style>
    .carousel{
        width:100%;
        min-height: 150px;
    }
</style>