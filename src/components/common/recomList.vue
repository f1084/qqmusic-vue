<template>
    <div class="mod-two-col-list mod-two-col-list-normal">
        <h2 class="list-title">电台</h2>
        <ul id="radio-wrapper" class="list-container">
            <li class="js-player-radio">
                <a href="" class="list-main">
                    <div class="list-media">
                        <img src="" alt="" class="list-pic">
                        <span class="icon icon-play"></span>
                    </div>
                    <div class="list-info">
                        <h3 class="list-tit tit-two-row"></h3>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
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
    margin-left: -8px;
    overflow: hidden;
}
.list-main{
    background: #fff;
    display: block;
}
.list-media{
    position: relative;
    margin-bottom: 5px;
}
.list-pic{
    position: absolute;
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
}
.list-info{
    padding: 0 7px 5px;
    color: #000;
}
.list-tit,.tit-two-row{
    height: 36px;
    line-height: 18px;
    white-space: normal;
    word-wrap: break-word;
}
</style>
