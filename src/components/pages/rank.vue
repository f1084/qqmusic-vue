<template>
    <ul class="rakingList">
        <router-link  tag="li" class="raking" v-for="(val,index) in list" :key="val.id"
                      :to="{ name: 'top', params: { id: val.id }}">
            <img class="rakingImg" v-lazy="val.picUrl" alt="">
            <span class="listen-count" v-text="(val.listenCount/10000).toFixed(1)+'万'"></span>
            <div class="rakingBox">
                <h3 class="rakingTitle">{{val.topTitle}}</h3>
                <p v-for="(value,index) in val.songList" :key="value.id">
                    <b class="rakingSongName">{{index+1}}.{{value.songname}}</b>
                    <span class="rakingSingerName"> -{{value.singername}}</span>
                </p>
            </div>
        </router-link>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        
        mounted(){
            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073',{
                jsonp:"jsonpCallback"
            }).then(res =>{
                this.list=res.body.data.topList;
            })
        },
        destroyed(){
            console.log('榜单页组件被销毁！');
        }
    }
</script>
<style>
.rakingList{
    margin: 10px;
    padding: 0px; 
}
.raking{
    display: flex;
    height: 15vh;
    margin: 2vh auto;
    width: 100%;
    background: #fff;
    position: relative;
}
.rakingImg{
    display: block;
    height:15vh;
}
.rakingBox{
    margin-left: 15px;
    width: 64%;
    overflow: hidden;
}
.rakingTitle{
    margin: 4px 0;
    font-size: 16px;
    color: #000;
}
.rakingBox p{
    margin: 2px 0;
    text-overflow: ellipsis;
    font-weight: normal;
    white-space: nowrap;
    word-wrap: break-word;
    overflow: hidden;
    font-size: 14px;
}
.rakingSongName{
    font-weight: normal;
    color: #549688;
}
.rakingSingerName{
    color: #48c0a3;
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