<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(val,index) in sliderArr" :key="val.id" data-swiper-autoplay="4000">
                <a :href="val.linkUrl"><img :src="val.picUrl" class="carousel"></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="mod-two-col-list mod-two-col-list-normal">
            <h2 class="list-title">电台</h2>
            <ul id="radio-wrapper" class="list-container">
                <li class="js-player-radio" v-for="(val,index) in radioListArr" :key="val.id" @click="playAudio()">
                    <a href="javascript:;" class="list-main">
                        <div class="list-media">
                            <img src="" alt="" :src="val.picUrl" class="list-pic">
                            <span class="icon icon-play"></span>
                        </div>
                        <div class="list-info">
                            <h3 class="list-tit tit-two-row" v-text="val.Ftitle"></h3>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mod-two-col-list mod-two-col-list-normal">
            <h2 class="list-title">热门歌单</h2>
            <ul id="radio-wrapper" class="list-container">
                <li class="js-player-radio" v-for="(val,index) in songListArr" :key="val.id">
                    <a href="" class="list-main">
                        <div class="list-media">
                            <img alt="" v-lazy="val.picUrl" class="list-pic">
                            <span class="listen-count" v-text="(val.accessnum/10000).toFixed(1)+'万'"></span>
                            <span class="icon icon-play"></span>
                        </div>
                        <div class="list-info">
                            <h3 class="list-tit tit-two-row" v-text="val.songListDesc"></h3>
                            <p v-text="val.songListAuthor"></p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <vfooter></vfooter>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vfooter from './../common/footer'
import VrecomList from './../common/recomList'
require('swiper/dist/css/swiper.css')
export default {
    name: 'carrousel',
    data() {
        return {
            sliderArr:[],
            radioListArr:[],
            songListArr:[],
            swiperOption: {//配置轮播图（参数和swiper的一样）
                notNextTick: true,
                autoplay: 4000,
                loop:true,
                autoplayDisableOnInteraction:false,
                direction : 'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : false,
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
    methods:{
        playAudio(){
            this.$router.push('player')
        }
    },
    mounted() {
        let url ='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492177982521'
        this.$http.jsonp(url,{jsonp:'jsonpCallback'}).then(res =>{
            this.sliderArr=res.body.data.slider;
            this.radioListArr=res.body.data.radioList;
            this.songListArr=res.body.data.songList;
        })
    },
    destroyed(){
        console.log('推荐页组件被销毁！');
    },
    components:{
        swiper,
        swiperSlide,
        VrecomList,
        Vfooter
    }
}
</script>
<style scoped>
.carousel{
    width:100%;
    min-height: 150px;
}
.mod-two-col-list-normal{
    margin-bottom: 7px;
}
.mod-two-col-list{
    margin: 0 10px;
}
.list-title{
    font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: normal;
}
.list-container{
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
}
.mod-two-col-list ul li{
    float: left;
    width: 50%;
    -webkit-box-sizing: border-box;
    padding: 0 4px;
    margin-bottom: 10px;
    overflow: hidden;
    list-style: none;
}
.list-main{
    background: #fff;
    display: block;
}
.list-media{
    position: relative;
    /* margin-bottom: 5px; */
}
.list-pic{
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    z-index: 1;
}
.icon,.icon-play{
    height: 24px;
    bottom: 5px;
    right: 5px;
    width: 24px;
    background-position: 0 0;
    background-image: url(./../../assets/list_sprite.png);
    background-repeat: no-repeat;
    background-size: 24px 60px;
    position: absolute;
    z-index: 2;
}
.list-info{
    padding: 7px 7px 5px;
    color: #000;
}
.list-tit,.tit-two-row{
    line-height: 18px;
    white-space: normal;
    word-wrap: break-word;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    margin: 0;
    white-space: nowrap;
}
p{
    margin: 0;
    font-size: 12px;
}
.listen-count{
    position: absolute;
    z-index: 2;
    left: 5px;
    bottom: 5px;
    font: 12px "hiragino sans gb",arial;
    color: #fff;
    background-image: url(./../../assets/list_sprite.png);
    background-repeat: no-repeat;
    background-position: 0 -49px;
    background-size: 24px 60px;
    padding-left: 12px;
}
</style>
