import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/pages/recommend'
// import rank from '@/components/pages/rank'
// import search from '@/components/pages/search'
// import top from '@/components/pages/top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require.ensure([], () => resolve(require('@/components/pages/recommend.vue')), 'index')
    },
    {
      path: '/rank',
      name: 'rank',
      component: resolve => require.ensure([], () => resolve(require('@/components/pages/rank.vue')), 'rank'),
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require.ensure([], () => resolve(require('@/components/pages/search.vue')), 'search')
    },
    {
      path: '/top/:id',
      name: 'top',
      component: resolve => require.ensure([], () => resolve(require('@/components/pages/top.vue')), 'top')
    },
    {
      path: '/player',
      name: 'player',
      component: resolve => require.ensure([], () => resolve(require('@/components/pages/player.vue')), 'player')
    }
  ]
})
