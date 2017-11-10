<template>
    <div class="content_container">
        <div class="mod_search_bar">
            <div class="search_bar_cont">
                <input v-model="currentKey" @selectHistoryKey="getSelectHistoryKey" class="search_input" type="search" autocomplete="off" autocorrect="off" placeholder="搜索歌曲、歌单、专辑" @focus="inputFocus" @input="inputChange" @keyup.enter="resHotkeys">
                <span class="icon_search">搜索</span>
                <span v-show="btnDeleteShow" class="icon_delete" @click="clearInput"></span>
            </div>
            <div class="search_bar_tip_text" v-show="btnCancelShow" @click="cancelBtn">取消</div>
        </div>
        <!-- 热门关键词 -->
        <div class="mod_search_result" v-show="isShowHotKeys">
            <h3 class="result_tit">热门搜索</h3>
            <div class="result_tags">
                <a :href="hotKeysObject['special_url']" class="tag_s tag_hot"> {{ hotKeysObject['special_key'] }}</a>
                <a v-for=" ( item , index ) in hotKeysObject['hotKeys'] " href="javascript:;" class="tag_s" :key="index"
                :data-n="item['n']" @click="searchHotKey(item['k'])" v-if="index < 10 "> {{ item['k'] }} </a>
            </div>
        </div>
        <searchHistory v-show="isShowSearchHistory"></searchHistory>
        <search-list v-show="isShowSearchList"></search-list>
    </div>
</template>

<script type="es6">

import searchHistory from './../common/searchHistory.vue'//引入历史记录模块
import searchList from './../common/searchList.vue'//引入搜索结果列表

export default{
    data(){
        return{
            btnDeleteShow : false ,
            btnCancelShow : false ,
            isShowHotKeys:true,
            isShowSearchHistory:false,
            isShowSearchList : false,
            hotKeysObject : {
                special_key : '',
                hotKeys : []
            },
            currentKey:''
        }
    },
    components : {
        searchHistory,
        searchList
    },
    methods : {
        //input获取焦点
        inputFocus(){
            this.btnCancelShow=true;
            this.isShowHotKeys = false;
            this.isShowSearchHistory=true;
        },
        //输入框变换
        inputChange(){
            let keyWords = String ( this.currentKey );
            if( keyWords.length > 0 ) this.btnDeleteShow = true;
            else this.btnDeleteShow = false;
        },
        //清除文本框
        clearInput(){
            this.currentKey = '';
            this.btnDeleteShow = false;
        },
        //点击取消
        cancelBtn(){
            this.currentKey='';
            this.btnCancelShow = false;
            this.btnDeleteShow = false;
            this.isShowHotKeys=true;
            this.isShowSearchHistory=false;
            this.isShowSearchList=false;
        },
        //输入key搜索相关数据
        resHotkeys(){
            if(!this.currentKey==""){
                this.isShowSearchList=true;
                this.$store.dispatch('set_recordList' , this.currentKey);
                this.$store.dispatch('set_currentKeyWord',this.currentKey);
            }
        },
        //点击热词搜索
        searchHotKey : function (key) {
            this.currentKey=key;
            
            this.btnDeleteShow=true;
            this.btnCancelShow=true;

            this.isShowHotKeys=false;
            this.isShowSearchHistory=false;

            this.$store.dispatch('set_recordList' , key);
            this.$store.dispatch('set_currentKeyWord',key);

            console.log(key);

            this.isShowSearchList=true;
        },
        getSelectHistoryKey(key){
            console.log('key'+key);
            this.currentKey=key;
        },
        //获取热词数据
        getHotKeysObject : function () {
            let _this = this;
            this.$http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?format=jsonp',
            {
                jsonp:"jsonpCallback"
            }).then(res => {
                _this.hotKeysObject.special_key=res.body.data.special_key;
                _this.hotKeysObject.special_url=res.body.data.special_url;
                res.body.data.hotkey.forEach((val,index) => {
                    index<10?this.hotKeysObject.hotKeys.push(val):false;
                });
                //缓存数据
                _this.$store.commit('set_hotKeysObject' , { hotKeysObject : _this.hotKeysObject })
            })
        }
    },
    destroyed(){
        this.isShowSearchList=false;
    },
    mounted(){
        if( this.$store.getters.get_hotKeysObject.special_key ) this.hotKeysObject = this.$store.getters.get_hotKeysObject;
        else this.getHotKeysObject();
    }
}
</script>

<style scoped>
input::-webkit-input-placeholder{
    color: rgba(0,0,0,.3);
}
.mod_search_bar {
    background: #f4f4f4;
    padding: 10px;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
}
.mod_search_bar .search_bar_cont {
    position: relative;
    border-radius: 3px;
    background: #fff;
    height: 36px;
    padding: 8px 12px 8px 35px;
    -webkit-box-flex: 1;
}
.mod_search_bar .search_input {
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: rgba(0,0,0,.3);
    border: none;
    -webkit-appearance: none;
    font-size: 14px;
    background-color: white;
    -webkit-rtl-ordering: logical;
    user-select: text;
    cursor: auto;
    outline: none;
    box-sizing: border-box;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    -webkit-writing-mode: horizontal-tb;
    text-align: start;
    margin: 0;
}
.mod_search_bar .icon_search {
    position: absolute;
    top: 9px;
    left: 10px;
    width: 18px;
    height: 18px;
    background-image: url(./../../assets/search.png);
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px;
}
.mod_search_bar .icon_delete {
    display: block;;
    position: absolute;
    top: 9px;
    right: 12px;
    width: 18px;
    height: 18px;
    background: #b1b1b1;
    text-indent: -9999px;
    border-radius: 99px;
}
.mod_search_bar .icon_delete:before {
    width: 10px;
    height: 2px;
    margin-left: -5px;
    margin-top: -1px;
}
.mod_search_bar .icon_delete:after {
    width: 2px;
    height: 10px;
    margin-left: -1px;
    margin-top: -5px;
}
.mod_search_bar .icon_delete:before, .mod_search_bar .icon_delete:after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    background: #fff;
    -webkit-transform: rotate(45deg);
}
.mod_search_bar .search_bar_tip_text {
    padding-right: 10px;
    padding-left: 10px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
}
.mod_search_result {
    font-size: 1.17em;
    background: #fff;
    padding: 15px 15px 10px 15px;
}
.mod_search_result .result_tit {
    color: rgba(0,0,0,.6);
    font-weight: bold;
    margin-bottom: 8px;
}
.result_tit{
    font-size: 1.17em;
    margin: 0px;
}
.mod_search_result .result_tags {
    font-size: 0;
}
.mod_search_result .tag_s {
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
}
.mod_search_result .tag_hot {
    color: #fc4524;
    border-color: #fc4524;
}
</style>

