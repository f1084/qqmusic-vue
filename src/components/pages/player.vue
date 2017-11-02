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
.mini-player img{
    height: 50px;
    width: 50px;
}
</style>
