<template>
  <div id="app">
    <Vheader></Vheader>
    <Vtabs></Vtabs>
    <keep-alive>	
      	<router-view></router-view>
    </keep-alive>
    <!-- <transition name="fade">
        <vplayer v-show="isShowPlayer"></vplayer>
    </transition> -->
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
//   computed:{
//       isShowPlayer(){
//           return this.$store.state.isShowPlayer
//       }
//   }
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F4F4F4;
    font-family: "hiragino sans gb",arial;
}
span{
    color:#808080;
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
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
</style>
