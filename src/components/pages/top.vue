<template>
<transition name="fade">
    <div class="topListBox">
        <div class="info-box">
            <!-- <mu-appbar style="position:fixed;background:transparent;boxshadow:none">
                <mu-icon-button icon="close" slot="left" @click="$router.go(-1)"/>
            </mu-appbar> -->
            <img :src="topList.img" alt="" class="album-cover">
            <div class="top_bar">
                <img class="top_bar__img" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000" alt="">
                <div class="top_bar__bd">
                    <h6 class="top_bar__tit">QQ音乐</h6>
                    <p class="top_bar__desc">打开APP收藏、下载</p>
                </div>
                <a class="top_bar__btn js_open_music" data-type="1" href="javascript:;">打开</a>
            </div>
            <div class="album">
                <div class="album-media">
                    <img :src="topList.img" alt="">
                </div>
                <div class="album-bd">
                    <h1 class="album-name">{{topList.title}}</h1>
                    <p class="album-desc">{{"第"+day_of_year+"天"}}</p>
                    <p class="album-desc">{{date+"更新"}}</p>
                </div>
            </div>
            <div class="opt-box">
                <a class="btn_play_all js_play_all" href="javascript:;" style="display:">播放全部</a>
            </div>
        </div>
        <div class="toplist-wrap">
            <div class="count_box">
	    		<div class="count_box__desc">排行榜<span class="count_box__number">{{"共"+total_song_num+"首"}}</span></div>
	    		<!-- <a class="collect js_open_music" data-type="1" href="javascript:;">下载</a> -->
	    	</div>
            <ul class="topList">
                <li class="topListInfo"
                    v-for="(val,index) in topList.list"
                    :key="index"
                    @click="$store.dispatch('sendMusic',val)"
                >
                    <h1 :style="{'color':index>=3?'#000':'#FF400B'}">
                        {{index+1}}
                    </h1>
                    <P>
                        <b :style="{'color':infoColor?'#000':'#fff'}">
                            {{val.name}}
                        </b>
                        <span>
                            {{val.singer}}
                        </span>
                    </P>
                </li>
            </ul>
        </div>
    </div>
</transition>
</template>
<script>
export default{
    data(){
        return{
            day_of_year:'',
            date:'',
            total_song_num:0,
            topList:{color:'',img:'',list:[]},
            infoColor:false
        }
    },
    activated(){
        let id = this.$route.params.id;
        console.log("id"+id);
        let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=" + id + "&_=1492910996732";
        this.$http.jsonp(url, {
            jsonp: 'jsonpCallback'
        }).then(res => {
            if(res.body.color>10000000){
                this.infoColor=true
            }else if (res.body.color<100){
                this.infoColor=true
            }else {
                this.infoColor=false;
            }
            console.log(res);
            this.day_of_year=res.body.day_of_year;
            this.date=res.body.date;
            this.total_song_num=res.body.total_song_num;
            this.topList.title=res.body.topinfo.ListName;
            this.topList.color='#'+res.body.color.toString(16);
            if (this.topList.color.length<7){
                for(let i =this.topList.color.length;i<7;i++ ){
                    this.topList.color+="9"
                }
            }
            this.topList.img=res.body.topinfo.pic_album;
            res.body.songlist.forEach(val => {
                this.topList.list.push({
                    name:val.data.songname,
                    img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.data.albummid+".jpg?max_age=2592000",
                    songid:val.data.songid,
                    singer:val.data.singer[0].name})
            });
        })
    },
    computed:{
        backgroundUrl(){
            return  "background-image:url("+this.topList.img+") ;"
        }
    }
}
</script>
<style>
.topListBox{
    z-index: 10000;
    height: 100vh;
    width: 100%;
    background: #fff;
    position: absolute;
    top: 0;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.top_bar {
    display: -webkit-box;
    -webkit-box-align: center;
    height: 48px;
    padding: 0 16px 0 14px;
    color: #fff;
    background: rgba(0,0,0,.2);
}
.top_bar__img {
    display: block;
    width: 36px;
    margin-right: 3px;
}
.top_bar__bd {
    -webkit-box-flex: 1;
}
.top_bar__tit {
    line-height: 1.3;
    font-size: 14px;
}
.top_bar__desc {
    font-size: 10px;
}
.top_bar__btn {
    position: relative;
    display: block;
    height: 24px;
    padding: 0 12px;
    line-height: 24px;
    font-size: 15px;
    color: #fff;
}
.top_bar__btn::before {
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
}
.top_bar__btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    -webkit-box-sizing: border-box;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-style: solid;
    border-color: currentColor;
    border-width: 1px;
    border-radius: 999px;
}
.album{
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-sizing: border-box;
    width: 100%;
    margin-top: 17px;
    padding: 0 16px;
    overflow: hidden;
}
.album-media{
    position: relative;
    width: 125px;
    height: 125px;
    margin-right: 10px;
    overflow: hidden;
}
.album-media img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.album-bd{
    position: relative;
    -webkit-box-flex: 1;
}
.album-name{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 47px;
    line-height: 1.3;
    overflow: hidden;
    font-size: 18px;
}
.album-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 36px;
    overflow: hidden;
    margin-top: 8px;
}
.opt-box {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 84px;
    padding: 0 16px;
    z-index: 4;
    -webkit-transition: 1s ease-in-out;
}
.btn_play_all {
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    width: 170px;
    height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 20px;
    background: #31c27c;
}
.btn_play_all::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    margin-right: -3px;
    border-color: transparent transparent transparent #fff;
    border-width: 7px 11px;
    border-style: solid;
    border-radius: 2px;
}
.info-box{
    position: absolute;
    height: 274px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    color:#fff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    background: rgba(0,0,0,.5);
}
.album-cover{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transform: scale(1.1) translateZ(0);
    -webkit-filter: blur(36px);
}
.count_box {
    position: relative;
    display: -webkit-box;
    -webkit-box-align: center;
    height: 54px;
    margin: 0 16px -10px;
    margin-top: 274px;
}
.count_box__desc {
    font-size: 14px;
    color: #777;
}
.goToRaking{
    position: fixed;
    top:0;
    left: 0;
    z-index: 2;
    width: 100%;
    height:6vh;
    line-height: 6vh;
    padding-left: 1rem;
    font-size: 1.4rem;
}
.goToRaking p{
    position: absolute;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    opacity: .4;
    z-index: 0;
}
.goToRaking a{
    position: relative;
    z-index: 1;
}
.topListBox{
    overflow: auto;
    background-size: contain;
    background-repeat: no-repeat;
}
.topListTitle{
    position:relative;
    height:8vh;
}
.topListTitle p{
    height:100%;
    width:100%;
    position: absolute;
    left: 0;
    top:0;
    opacity: .4;
}
.topListInfo{
    display: flex;
    margin: 0;
    align-content: center;
    height: 8vh;
}
.topListInfo h1{
    height:8vh;
    line-height: 8vh;
    padding: 0;
    margin: 0;
    font-size: 16px;
    width:14%;
    color: #fff;
    text-align: center;
}
.topListInfo p{
    flex: 1;
    margin: 0;
    height:8vh;
    width:66%;
    padding: 10px 16px;
}
.topListInfo p b,.topListInfo p span{
    display: block;
    height:4vh;
    line-height: 4vh;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:80%;
    color: #fff;
}
.topListInfo p b{
    font-weight: normal;
    font-size: 16px;
    height: 24px;
    line-height: 24px;
}
.topListInfo p span{
    font-size: 14px;
    color: #777;
    height: 18px;
    line-height: 18px;
}
</style>