// import queryString from 'query-string';
// import Vuex from 'vuex';
// import VueRouter from 'vue-router'

/* tslint:disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import VueVega from 'vue-vega';
import jQuery from 'jquery';
import $ from 'jquery';
import _ from 'lodash';
import d3 from 'd3';
import SvgSaver from 'svgsaver';
import vega from 'vega';
import vegaLite from 'vega-lite';
import vegaEmbed from 'vega-embed'

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import AugurApp from '@/components/AugurApp.vue';
import router from './router';
var store = require('@/store/store').default;

// Layouts
import Default from '@/layouts/Default.vue';

// Utility
import AugurAPI from '@/AugurAPI';
import AugurStats from '@/AugurStats';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

Vue.use(ShardsVue);
// Vue.use(Vuex)
Vue.use(VueVega);
// Vue.use(VueRouter);

export default function Augur () {
  // AugurApp.store = store
  // Object.defineProperty(AugurApp, 'store', store);


  // router.beforeEach((to:any, from:any, next:any) => {
  //   if (to.params.repo || to.params.groupid){
  //     if (!to.params.groupid && !to.params.comparedrepo){
  //       AugurApp.store.commit("resetTab")
  //       AugurApp.store.commit('setTab', {
  //         tab: to.name
  //       })
  //       if (to.params.repo.includes('github') || to.params.repo.split(".").length > 2) {
  //         AugurApp.store.commit('setRepo', {
  //           gitURL: to.params.repo
  //         })
  //       } else {
  //         AugurApp.store.commit('setRepo', {
  //           githubURL: to.params.owner + '/' + to.params.repo
  //         })
  //       }
  //     } else if (to.params.comparedrepo && AugurApp.store.state.comparedRepos.length == 0) { 
  //       let tab = to.name
  //       tab = tab.substring(0, tab.length-7)
  //       AugurApp.store.commit("resetTab")
  //       AugurApp.store.commit('setTab', {
  //         tab
  //       })
  //       AugurApp.store.commit('setRepo', {
  //           githubURL: to.params.owner + '/' + to.params.repo
  //         })
  //       AugurApp.store.commit('addComparedRepo', {
  //         githubURL: to.params.comparedowner + '/' + to.params.comparedrepo
  //       })
  //     } else if (to.params.groupid && AugurApp.store.state.comparedRepos.length == 0){
  //       AugurApp.store.commit("resetTab")
  //       let tab = to.name
  //       tab = tab.substring(0, tab.length-5)
  //       AugurApp.store.commit('setTab', {
  //         tab
  //       })
  //       let repos = to.params.groupid.split('+')
  //       if (repos[0].includes('github')) {
  //         AugurApp.store.commit('setRepo', {
  //           gitURL: repos[0]
  //         })
  //       } else {
  //         AugurApp.store.commit('setRepo', {
  //           githubURL: repos[0]
  //         })
  //       }
  //       repos.shift()
  //       // repos.pop()
  //       repos.forEach((cmprepo:string) => {
  //         AugurApp.store.commit('addComparedRepo', {
  //           githubURL: cmprepo
  //         })
  //       })
  //     }
  //   }

  //   next()
  // })

  // AugurApp.storeApp = new window.Vue({
  new Vue({
    router,
    store,
    render: h => h(AugurApp)

  }).$mount('#app')

  // Load state from query string

  // let parsed = queryString.parse(window.location.search, { arrayFormat: 'bracket' })
  // let payload = { fromURL: true }
  // let hasState = 0
  // if (parsed.repo) {
  //   payload.githubURL = parsed.repo.replace(' ', '/')
  //   hasState = 1
  // }
  // if (parsed.git) {
  //   payload.gitURL = window.atob(parsed.git)
  //   hasState = 1
  // }
  // if (hasState) {  
  //   AugurApp.storeApp.$store.commit('setRepo', payload)
  // }
  // if (parsed.comparedTo) {
  //   parsed.comparedTo.forEach((repo) => {
  //     AugurApp.storeApp.$store.commit('addComparedRepo', { githubURL: repo.replace(' ', '/') })
  //   })
  // }

}