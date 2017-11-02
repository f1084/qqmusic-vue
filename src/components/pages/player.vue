<template>
<div class="audio-player">
    <!-- player -->
    <div class="player">
        <mu-appbar v-bind:title=topList.title style="position:fixed;background:transparent;boxshadow:none">
            <mu-icon-button icon="close" slot="left" @click="$router.go(-1)"/>
        </mu-appbar>
    </div>
    <!-- mini播放器 -->
    <div class="mini-player">
        <mu-float-button icon="add" mini class="demo-float-button"/>
    </div>
    <!-- 播放器 -->
    <audio ref="audioRef"
           @play="canplay"
           @error="error"
           @timeupdate="timeupdate"
           @ended="ended"
           :src="currentSong.url">Your browser does not support the audio element.</audio>
</div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.audio-player{
    height: 100vh;
    width: 100%;
    z-index: 1000;
    background: #fff;
}
.mini-player{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10001;
    overflow: hidden;
    border:2px solid #31C27C;
    box-shadow: 0px 0px 5px #444;
}
.mini-player img{
    height: 50px;
    width: 50px;
}
</style>
