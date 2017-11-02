<template>
  <div id="app">
    <Vheader></Vheader>
    <Vtabs></Vtabs>
    <keep-alive>	
      	<router-view></router-view>
    </keep-alive>
    <vplayer></vplayer>
  </div>
</template>

<script>
import Vheader from './components/common/header'
import Vtabs from './components/common/tabs'
import Vplayer from './components/pages/player'
export default {
  name: 'app',
  components:{
    Vheader,
    Vtabs,
    Vplayer
  }
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F4F4F4;
    font-family: "hiragino sans gb",arial;
}
ul,p,h6{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
.mu-tab-link-highlight{
    background:#31C27C !important;
}
.mu-tab-text{
    font-size:16px;
    font-family: "hiragino sans gb",arial;
}
.mu-tab-link{
    color: #555;
}
.mu-tab-active{
    color:#31C27C !important;
}
</style>
