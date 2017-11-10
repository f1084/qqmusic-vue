<template>
    <div class="mod_search_result" v-show="isShow">
        <h3 class="result_tit">热门搜索</h3>
        <div class="result_tags">
            <a :href="hotKeysObject['special_url']" class="tag_s tag_hot"> {{ hotKeysObject['special_key'] }}</a>
            <a v-for=" ( item , index ) in hotKeysObject['hotKeys'] " href="javascript:;" class="tag_s"
               :data-n="item['n']" :key="index" @click="searchHotKey(item['k'])" v-if="index < 10 "> {{ item['k'] }} </a>
        </div>
    </div>
</template>

<script type="es6">
    import {mapMutations,mapGetters} from 'vuex'
    export default{
    	props : ['isShow'],
        data(){
    		return{
				hotKeysObject : {
					special_key : '',
					hotKeys : []
                }
            }
        },
        methods :{
        	getHotKyesObject : function () {
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
			},
			searchHotKey : function (key) {
                this.$store.dispatch('set_recordList' , key);
                this.$store.dispatch('set_currentKeyWord',key);
			}
        },
        mounted(){
           if( this.$store.getters.get_hotKeysObject.special_key ) this.hotKeysObject = this.$store.getters.get_hotKeysObject;
           else this.getHotKyesObject();
        }
    }
</script>

<style scoped>
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