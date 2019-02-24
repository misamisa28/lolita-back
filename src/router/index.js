import Vue from 'vue'
import Router from 'vue-router'


import lolita from './lolita'
import statistics from './statistics'
import type from './type'
import article from './article'
import message from './message'
import account from './account'
import personal from './personal'
import login from './login'

Vue.use(Router)

const RouterModel = new Router({
  linkExactActiveClass: 'active',
  routes: [...lolita, ...statistics, ...type, ...article, ...message, ...account, ...personal, ...login]
});

export default RouterModel;

