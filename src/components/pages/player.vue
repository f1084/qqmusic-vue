<template>
<transition name="fade">
    <div class="audio-player">
        <!-- player -->
        <div class="main-box">
            <div class="slider">
                <div class="slider-item">
                    <div class="flex-box">
                        <div class="song-info">
                            <div class="album-cover">
                                <img src="//y.gtimg.cn/music/photo_new/T002R150x150M000003fng4t4EEZEA.jpg?max_age=2592000" alt="">
                            </div>
                            <div class="song-info-flex">
                            <h1 class="song-name">星星泪</h1>
                            <p class="singer-name">宋贤</p>
                            </div>
                            <a href="" class="icon-play"></a>
                        </div>
                        <div class="flex-item">
                            <div class="lyric" id="lyric">
                                <div class="lyric__box" id="lyric_txt" style="overflow: hidden;">
                                    <div class="lyric__text" id="lyricDiv" style="transition: -webkit-transform 0.3s ease-out; transform-origin: 0px 0px 0px; transform: translate3d(0px, -84px, 0px);"><p id="line_0" class="">星星泪  - 宋茜</p><p id="line_1">词：李亮</p><p id="line_2">曲：李亮</p><p id="line_3" class="">制作人：朱金泰</p><p id="line_4" class="lyric__item--current">夜空中最闪亮的</p><p id="line_5">星星也曾 不断往下坠</p><p id="line_6">最完美的夜是一片漆黑</p><p id="line_7">恍惚的梦境 他来得太快</p><p id="line_8">谁也无法 防备</p><p id="line_9">天上下的不是雨</p><p id="line_10">而是谁的泪</p><p id="line_11">秒针不停啊 时针怎么追</p><p id="line_12">爱是错的啊 我却不能对</p><p id="line_13">城市中的人啊 你是欢是喜是伤悲</p><p id="line_14">忽然间这一切 一切的一切</p><p id="line_15">夜空中的星星</p><p id="line_16">一颗一颗 闪烁着泪</p><p id="line_17">最完美的梦是一片漆黑</p><p id="line_18">纷扰的夜空 是那么的美</p><p id="line_19">谁也无法防备</p><p id="line_20">天上下的不是雨</p><p id="line_21">是星星的泪</p><p id="line_22">秒针不停啊 时针只能紧跟随</p><p id="line_23">爱是错的啊 我却错到不能对</p><p id="line_24">城市中的人啊</p><p id="line_25">你爱恨悲欢究竟为了谁</p><p id="line_26">只为那一点点 幸福的滋味</p><p id="line_27">秒针都停啦 时针却也无法追</p><p id="line_28">爱是对的啊 我已错到不能对</p><p id="line_29">城市中的人啊</p><p id="line_30">只为那一点幸福的滋味</p><p id="line_31">忽然间这一切 一切的一切</p><p id="line_32">夜空中的星星</p><p id="line_33">一颗一颗 闪烁着泪</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="control">
            <div class="operate operate-left">
                <a class="operate-item js-playlist" href="javascript:;">
                    <i class="icon-play-list">歌单列表</i>
                </a>
            </div>
            <div class="operate operate-right">
                <a class="operate-item js-like" href="javascript:;">
                    <i class="icon-like">喜欢</i>
                </a>
            </div>
            <div class="progress">
                <!-- 无拖动点 增加progress--no_dot -->
                <div class="progress__bar progress--no_dot">
                    <div class="progress__box">
                        <div class="progress__bg"></div>
                        <div class="progress__load" style="-webkit-transform:translateX(100%);"></div>
                        <div class="progress__play" id="js-progress" style="transform: translateX(9.7084%); transition-duration: 1s;"></div>
                        <div class="progress__play" id="play_on"><span class="progress__dot" style="display:none;" id="btn_pro"></span></div>
                    </div>
                </div>
                <span class="progress__start js-time-start">00:17</span>
                <span class="progress__end js-time-total">03:04</span>
            </div>
            <div class="btns">
                <a class="btn-download">免费下载这首歌</a>
            </div>
        </div>
        <div class="actionsheet">
            <div class="mod_list_box">
                <h6 class="list_box__tit">播放队列<span class="list_box__count js-playlist-num">(20首)</span></h6>
                <div class="list_box__cont" id="js-playlist-scroll" style="overflow: hidden;">
                    <ul class="mod_play_list js-playlist-box" style="transition-property: -webkit-transform; transform-origin: 0px 0px 0px; transition-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1); transform: translate3d(0px, 0px, 0px);"><li class="play_list__item--current" data-index="0"><span class="play_list__song ">星星泪</span><b class="play_list__line">-</b><span class="play_list__singer">宋茜</span></li><li data-index="1"><span class="play_list__song ">当你老了</span><b class="play_list__line">-</b><span class="play_list__singer">赵照</span></li><li data-index="2"><span class="play_list__song ">平凡之路</span><b class="play_list__line">-</b><span class="play_list__singer">朴树</span></li><li data-index="3"><span class="play_list__song ">国境之南</span><b class="play_list__line">-</b><span class="play_list__singer">范逸臣</span></li><li data-index="4"><span class="play_list__song ">红颜劫</span><b class="play_list__line">-</b><span class="play_list__singer">姚贝娜</span></li><li data-index="5"><span class="play_list__song ">被遗忘的时光 II</span><b class="play_list__line">-</b><span class="play_list__singer">蔡琴</span></li><li data-index="6"><span class="play_list__song ">小星星</span><b class="play_list__line">-</b><span class="play_list__singer">汪苏泷</span></li><li data-index="7"><span class="play_list__song ">星空物语</span><b class="play_list__line">-</b><span class="play_list__singer">张翰</span></li><li data-index="8"><span class="play_list__song ">独家记忆</span><b class="play_list__line">-</b><span class="play_list__singer">陈小春</span></li><li data-index="9"><span class="play_list__song ">一生何求</span><b class="play_list__line">-</b><span class="play_list__singer">陈百强</span></li><li data-index="10"><span class="play_list__song ">对不起我爱你 (中文版)</span><b class="play_list__line">-</b><span class="play_list__singer">蔡淳佳</span></li><li data-index="11"><span class="play_list__song ">一万个舍不得</span><b class="play_list__line">-</b><span class="play_list__singer">庄心妍</span></li><li data-index="12"><span class="play_list__song ">外婆的澎湖湾</span><b class="play_list__line">-</b><span class="play_list__singer">潘安邦</span></li><li data-index="13"><span class="play_list__song ">野子 (Live)</span><b class="play_list__line">-</b><span class="play_list__singer">苏运莹</span></li><li data-index="14"><span class="play_list__song ">你是我的眼</span><b class="play_list__line">-</b><span class="play_list__singer">萧煌奇</span></li><li data-index="15"><span class="play_list__song ">就现在</span><b class="play_list__line">-</b><span class="play_list__singer">吴莫愁</span></li><li data-index="16"><span class="play_list__song ">挥着翅膀的女孩</span><b class="play_list__line">-</b><span class="play_list__singer">容祖儿</span></li><li data-index="17"><span class="play_list__song ">南山南</span><b class="play_list__line">-</b><span class="play_list__singer">马頔</span></li><li data-index="18"><span class="play_list__song ">有你的快乐</span><b class="play_list__line">-</b><span class="play_list__singer">王若琳</span></li><li data-index="19"><span class="play_list__song ">流星雨</span><b class="play_list__line">-</b><span class="play_list__singer">F4</span></li></ul>
                </div>
                <a class="list_box__close js-close-playlist" href="javascript:;">关闭</a>
            </div>
        </div>
        <div class="bg blur" id="bg" style="background-image: url(&quot;//y.gtimg.cn/music/photo_new/T002R150x150M000003fng4t4EEZEA.jpg?max_age=2592000&quot;);"></div>
        <div class="bg_mask" style="opacity:0.6;"></div>
        <audio id="h5audio_media" autoplay="" height="0" width="0" onerror="var url=this.src;setTimeout(function(){M &amp;&amp; M.tj &amp;&amp; M.tj.sendClick('streamIsNotFound.othersong.'+url)}, 1000)" src="http://dl.stream.qqmusic.qq.com/C400002D7DHZ3EkPNA.m4a?fromtag=38&amp;vkey=02BDE60D9DF030367EE0603D6157AFE989B69D5980F2FBF5FD2E84BE8110CB997005EC3A2CCF67CEEC0865E35068F875F9A1A440C9D8E725&amp;guid=6812906680"></audio>
    </div>
</transition>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.audio-player{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    z-index: 1000;
}
.main-box{
    position: absolute;
    top: 0;
    bottom: 154px;
    z-index: 3;
    width: 100%;
}
.slider{
    width: 200%;
    height: 100%;
    overflow: hidden;
}
.slider-item{
    position: relative;
    float: left;
    width: 50%;
    height: 100%;
    overflow: hidden;
}
.flex-box{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
.flex-item {
    -webkit-box-flex: 1;
    position: relative;
}
.lyric {
    display: -webkit-box;
    -webkit-box-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
.lyric__box {
    position: relative;
    width: 100%;
    height: 336px;
    overflow: hidden;
}
.lyric__text {
    min-height: 150px;
}
.lyric__text {
    position: absolute;
    left: 10px;
    right: 10px;
    overflow: hidden;
}
.lyric__text p, .lyric__item {
    height: 42px;
    line-height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: rgba(255,255,255,.6);
    text-align: center;
}
.song-info{
    position: relative;
    display: -webkit-box;
    padding: 15px 80px 15px 15px;
    background: rgba(0,0,0,.1);
}
.album-cover{
    position: relative;
    display: block;
    width: 80px;
    margin-right: 15px;
    overflow: hidden;
}
.album-cover::after{
    content: "";
    display: block;
    padding-top: 100%;
}
.album-cover img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-size: cover;
}
.song-info-flex{
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    position: relative;
    overflow: hidden;
}
.song-name{
    position: relative;
    height: 30px;
    overflow: hidden;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
}
.singer-name{
    height: 21px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #fff;
}
.icon-play{
    position: absolute;
    top: 50%;
    right: 25px;
    width: 43px;
    height: 43px;
    margin-top: -22px;
    border: solid 1px #fff;
    border-radius: 999px;
    background: rgba(0,0,0,.1);
    opacity: .6;
}
.icon-play::after{
    background-image: url(./../../assets/sprite_play.png);
    background-repeat: no-repeat;
    background-size: 40px 350px;
}
.control{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 154px;
}
.operate {
    position: absolute;
    bottom: 114px;
    overflow: hidden;
}
.operate-left{
    left:15px;
}
.operate-right{
    right:15px;
}
.operate-item {
    float: left;
    width: 40px;
    height: 40px;
    margin-left: 5px;
}
.icon-like,.icon-play-list, .icon_play::after, .btn_download::before, .tips.success p::before {
    background-image: url(//y.gtimg.cn/mediastyle/mobile/app/share/img/sprite_play.png?max_age=2592000&d=20151203183007);
    background-repeat: no-repeat;
    background-size: 40px 350px;
}
.icon-play-list {
    width: 24px;
    height: 18px;
    margin-top: 11px !important;
    background-position: 0 -240px;
}
.icon-like, .icon_kg, .icon-bgmusic, .icon-play-list {
    display: block;
    margin: 0 auto;
    overflow: hidden;
    line-height: 999px;
}
.icon-like {
    width: 25px;
    height: 21px;
    margin-top: 10px;
}
.progress {
    position: absolute;
    bottom: 74px;
    width: 100%;
    height: 40px;
}
.progress--no_dot {
    right: 55px;
}

.progress__bar {
    position: absolute;
    top: 0;
    left: 55px;
    right: 47px;
    height: 40px;
    overflow: hidden;
}
.progress__box {
    position: absolute;
    top: 0;
    left: 8px;
    right: 8px;
    z-index: 2;
    height: 40px;
}
.progress__start {
    left: 0;
}
.progress__end {
    right: 0;
}
.progress__start, .progress__end {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 55px;
    line-height: 40px;
    text-align: center;
}
.btns{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 65px;
}
.btn-download{
    position: relative;
    display: block;
    height: 45px;
    line-height: 45px;
    margin: 0 50px;
    padding: 0 55px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 20px;
    color: #fff;
    border-radius: 999px;
    background-color: #31c27c;
    text-align: center;
}
.btn-download::before{
    background-image: url(./../../assets/sprite_play.png);
    background-repeat: no-repeat;
    background-size: 40px 350px;
}
.btn-download::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 33px;
    height: 33px;
    background-position: 0 -300px;
}
.blur {
    -webkit-filter: blur(15px);
    -webkit-transform: scale(1.15);
}
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background-size: cover;
    background-position: bottom center;
}
.bg_mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #000;
}

.actionsheet {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 380px;
    background: rgba(0,0,0,.4);
    -webkit-transform: translateY(380px);
    -webkit-transition: all 250ms;
}
.mod_list_box {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    position: relative;
    height: 100%;
}
.list_box__tit, .list_box__close {
    position: relative;
    display: block;
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    color: #fff;
}
.list_box__count {
    margin-left: 10px;
    color: rgba(255,255,255,.5);
}
.list_box__tit, .list_box__close {
    position: relative;
    display: block;
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-weight: normal;
    font-size: 16px;
    color: #fff;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2){
    .list_box__tit::after, .list_box__close::after, .mod_play_list li::after, .play_list__item::after {
        -webkit-transform: scaleY(.5);
    }
}
.list_box__tit::after, .list_box__close::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 1px;
    background: rgba(255,255,255,.3);
}
.list_box__cont {
    -webkit-box-flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.list_box__tit::after, .list_box__close::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 1px;
    background: rgba(255,255,255,.3);
}
</style>
