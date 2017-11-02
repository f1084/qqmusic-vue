<template>
    <div class="content_container">
        <div class="mod_search_bar">
            <div class="search_bar_cont">
                <input v-model="keyWords" class="search_input" type="search" autocomplete="off" autocorrect="off" placeholder="搜索歌曲、歌单、专辑" @focus="inputFocus" @input="inputChange">
                <span class="icon_search">搜索</span>
                <span v-show="btnDeleteShow" class="icon_delete" @click="clearInput"></span>
            </div>
            <div class="search_bar_tip_text" v-show="btnCancelShow" @click="cancelBtn">取消</div>
        </div>
        <hotKeys :isShow="!btnCancelShow"></hotKeys>
        <searchHistory :isShow="btnCancelShow"></searchHistory>
    </div>
</template>

<script type="es6">
    //引入关键字模块
    import hotKeys from './../common/hotKeys.vue'
    //引入历史记录模块
    import searchHistory from './../common/searchHistory.vue'

    export default{
		data(){
			return{
				keyWords : '',
				btnDeleteShow : false ,
				btnCancelShow : false ,
            }
		},
        components : {
			hotKeys ,
			searchHistory
        },
        methods : {
			//input获取焦点
			inputFocus(){
				this.btnCancelShow = true;
            },
            //输入框变换
			inputChange(){
				let keyWords = String ( this.keyWords );
				if( keyWords.length > 0 ) this.btnDeleteShow = true;
                else this.btnDeleteShow = false;
            },
            //清除文本框
			clearInput(){
                this.keyWords = '';
				this.btnDeleteShow = false;
            },
            //点击取消
			cancelBtn(){
                this.btnCancelShow = false;
            }
        },
        beforeMount(){

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
</style>

