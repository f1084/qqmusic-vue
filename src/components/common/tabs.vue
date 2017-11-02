<template>
<div class="tabs">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="/" title="推荐"/>
    <mu-tab value="/rank" title="排行榜"/>
    <mu-tab value="/search" title="搜索"/>
  </mu-tabs>
  <div v-if="activeTab === '/'">
    <keep-alive>
    </keep-alive>
  </div>
  <div v-if="activeTab === '/rank'">
    <keep-alive>
    </keep-alive>
  </div>
  <div v-if="activeTab === '/search'">
  <keep-alive>
  </keep-alive>
  </div>
</div>
</template>

<script>
import Vheader from './../common/header'
import Vrecommend from './../pages/recommend'
import Vrank from './../pages/rank'
import Vsearch from './../pages/search'
import Vfooter from './../common/footer'
export default {
  data () {
    return {
      activeTab: '/'
    }
  },
  computed:{
    
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      if(this.activeTab=="/"){
        this.$router.push(this.activeTab)
      }else if(this.activeTab=='/rank'){
        this.$router.push(this.activeTab)
      }else{
        this.$router.push(this.activeTab)
      }
    }
  },
  components:{
    Vrecommend,Vrank,Vsearch,Vheader,Vfooter
  }
}
</script>
<<style scoped>
.mu-tabs{
    height:40px;
    width:100wh;
    background:#fff;
}
.mu-tab-active{
  color:#31C27C !important;
}
</style>
