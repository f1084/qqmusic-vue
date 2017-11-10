<template>
    <ul class="searchList">
        <li v-for="(val,index) in searchList" @click="$store.dispatch('sendMusic',val)" :key="index">
            <div><img :src="val.img" alt=""></div>
            <div>
            <h1>{{val.name}}</h1>
            <p>{{val.singer}}</p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            hotListState:true,
            searchListState:false,
            notFound:false,
            searchList:[],
            keyWords:''
        }
    },
    methods:{

    },
    mounted(){
        this.keyWords=this.$store.getters.getCurrentKeyWord;
        // if(this.keyWords!=""){
        //     this.$http.jsonp(
        //         "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w="+this.keyWords+"",{
        //         jsonp:"jsonpCallback"
        //     }).then(res => {
        //         if (res.body.data.song.list !=[]){
        //             this.hotListState=false;
        //             this.searchListState=true;
        //             this.searchList=[];
        //             res.body.data.song.list.forEach(val => {
        //                 this.searchList.push({name:val.songname,
        //                     img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.albummid+".jpg?max_age=2592000",
        //                     songid:val.songid,
        //                     singer:val.singer[0].name})
        //             });
        //         }else {
        //             this.notFound=true
        //         }
        //     })
        // }
    },
    destroyed(){
        console.log('销毁搜索结果组件');
    }
}
</script>
<style scoped>
.searchList{
    overflow: auto;
    height: 82vh;
    background: #fff;
    flex: 1;
}
.searchList li{
    border-bottom: 1px #ccc solid;
    display: flex;
    overflow: hidden;
    padding: 0 12px;
}
.searchList ul li div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.searchList li img{
    width:50px;
    margin: 2px 0;
}
.searchList li h1,.searchList li p{
    margin: .5rem 0;
    padding-left: 1rem;
}
.searchList li h1{
    font-size: 1.2rem;
}
.notFound{
    position: relative;
    height: 62vh;
}
.notFound button{
    font-size: 2rem;
    margin-right: 10px;
    margin-top: 10px;
}
.notFound h1{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
    text-align: center;
    height:5vh;
    font-size: 1.2rem;
}
</style>

