import Vue from 'vue'
import Router from 'vue-router'

import indexPage from '@/views/indexPage'

import register from  '@/views/register'
import login  from '@/views/login'
import forgetPas from '@/views/forgetPas'


import pmHost from '@/views/perManagment/pmHost'
import pmNet  from '@/views/perManagment/pmNet'
import pmStorage from '@/views/perManagment/pmStorage'
import pmMonitor from '@/views/perManagment/pmMonitor'
import pmBalance from '@/views/perManagment/pmBalance'

import pmPubRenew from '@/views/perManagment/pmNet/pmPubRenew'
import pmPriquery from '@/views/perManagment/pmNet/pmPriquery'
import pmPriRenew from '@/views/perManagment/pmNet/pmPriRenew'

import pmHostRenew from '@/views/perManagment/pmHost/pmHostRenew'
import pmSetHostPas from '@/views/perManagment/pmHost/pmSetHostPas'
import pmHostAbout from '@/views/perManagment/pmHost/pmHostAbout'
import pmSpAbout from '@/views/perManagment/pmHost/pmSpAbout'
import pmImage from '@/views/perManagment/pmHost/pmImage'

import pmMonHost from '@/views/perManagment/pmMonitor/pmMonHost'
import pmMonHD from '@/views/perManagment/pmMonitor/pmMonHD'
import pmMonRouter from '@/views/perManagment/pmMonitor/pmMonRouter'


import pmStoRenew from '@/views/perManagment/pmStorage/pmStoRenew'
import pmSpRenew from '@/views/perManagment/pmStorage/pmSpRenew'


import pmBaRenew from '@/views/perManagment/pmBalance/pmBaRenew'
import pmBaquery from '@/views/perManagment/pmBalance/pmBaquery'

import pmStList from '@/views/perManagment/pmStList'

import dailylog       from '@/views/perManagment/dailylog'

import smHost from '@/views/setManagment/smHost'
import smNet from '@/views/setManagment/smNet'
import smStorage from '@/views/setManagment/smStorage'
import smBalance from '@/views/setManagment/smBalance'

import logBalance from '@/views/perManagment/log/logBalance'
import logHD from '@/views/perManagment/log/logHD'
import logHost from '@/views/perManagment/log/logHost'
import logNet from '@/views/perManagment/log/logNet'
import logSt from '@/views/perManagment/log/logSt'


import setHost from '@/views/setManagment/smHost/setHost'
import setSnapshot from '@/views/setManagment/smHost/setSnapshot'
import setMirror from '@/views/setManagment/smHost/setMirror'

import setPublicIP from '@/views/setManagment/smNet/setPublicIP'
import setPerIP from '@/views/setManagment/smNet/setPerIP'

import setCloudHD from '@/views/setManagment/smStorage/setCloudHD'
import setHDSnap from '@/views/setManagment/smStorage/setHDSnap'

import setBalance from '@/views/setManagment/smBalance/setBalance'

import mesHost from '@/views/myMessage/mesHost'
import mesNet  from '@/views/myMessage/mesNet'


Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexPage ',
      component:indexPage
    },
    {
      path: '/register',
      name: 'register ',
      component:register
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/forgetPas',
      name: 'forgetPas',
      component:forgetPas
    },

    {
      path: '/perManagment/pmHost/pmSetHostPas',
      name: 'pmSetHostPas',
      component:pmSetHostPas
    },
    {
      path: '/perManagment/pmHost',
      name: 'pmHost',
      component:pmHost
    },
    {
      path: '/perManagment/log',
      component:dailylog
    },
    {
      path: '/perManagment/log/logBalance',
      component:logBalance
    },
    {
      path: '/perManagment/log/logHD',
      component:logHD
    },
    {
      path: '/perManagment/log/logHost',
      component:logHost
    },
    {
      path: '/perManagment/log/logNet',
      component:logNet
    },
    {
      path: '/perManagment/log/logSt',
      component:logSt
    },
    {
      path: '/perManagment/pmHost/pmHostRenew',
      name: 'pmHostRenew',
      component:pmHostRenew
    },
    {
      path: '/perManagment/pmHost/pmHostAbout',
      component:pmHostAbout
    },
    {
      path: '/perManagment/pmHost/pmSpAbout',
      component:pmSpAbout
    },
    {
      path: '/perManagment/pmHost/pmImage',
      component:pmImage
    },
    {
      path: '/perManagment/pmNet',
      name: 'pmNet',
      component:pmNet
    },
    {
      path: '/perManagment/pmNet/pmPubRenew',
      name: 'pmPubRenew',
      component:pmPubRenew
    },
    {
      path: '/perManagment/pmNet/pmPriRenew',
      component:pmPriRenew
    },
    {
      path: '/perManagment/pmNet/pmPriquery',
      component:pmPriquery
    },
    {
      path: '/perManagment/pmStorage',
      name: 'pmStorage',
      component:pmStorage,
    },
    {
      path: '/perManagment/pmStorage/pmStoRenew',
      name: 'pmStoRenew',
      component:pmStoRenew,
    },
    {
      path: '/perManagment/pmStorage/pmSpRenew',
      component:pmSpRenew,
    },
    {
      path: '/perManagment/pmStorage/pmStList',
      name: 'pmStList',
      component:pmStList,
    },
    {
      path: '/perManagment/pmMonitor',
      name: 'pmMonitor',
      component:pmMonitor
    },
    {
      path: '/perManagment/pmMonitor/pmMonHost',
      name: 'pmMonHost',
      component:pmMonHost
    },
    {
      path: '/perManagment/pmMonitor/pmMonRouter',
      name: 'pmMonRouter',
      component: pmMonRouter
    },
    {
      path: '/perManagment/pmMonitor/pmMonHD',
      name: 'pmMonHD',
      component: pmMonHD
    },
    {
      path: '/perManagment/pmBalance',
      name: 'pmBalance',
      component:pmBalance,
    },
    {
      path: '/perManagment/pmBalance/pmBaRenew',
      name: 'pmBaRenew',
      component:pmBaRenew,
    },
    {
      path: '/perManagment/pmBalance/pmBaquery',
      component:pmBaquery,
    },
    {
      path: '/setManagment/smHost',
      name: 'smHost',
      component:smHost
    },
    {
      path:'/setManagment/smHost/setHost',
      component:setHost
    },
    {
      path:'/setManagment/smHost/setSnapshot',
      component:setSnapshot
    },
    {
      path:'/setManagment/smHost/setMirror',
      component:setMirror
    },
    {
      path: '/setManagment/smNet',
      name: 'smNet',
      component:smNet
    },
    {
      path: '/setManagment/smNet/setPublicIP',
      name: 'setPublicIP',
      component:setPublicIP
    },
    {
      path: '/setManagment/smNet/setPerIP',
      name: 'setPerIP',
      component:setPerIP
    },
    {
      path: '/setManagment/smBalance',
      name: 'smBalance',
      component:smBalance
    },
    {
      path: '/setManagment/smBalance/setBalance',
      name: 'setBalance',
      component:setBalance
    },
    {
      path: '/setManagment/smStorage',
      name: 'smStorage',
      component:smStorage,
    },
    {
      path: '/setManagment/smStorage/setCloudHD',
      name: 'setCloudHD',
      component:setCloudHD,
    },
    {
      path: '/setManagment/smStorage/setHDSnap',
      name: 'setHDSnap',
      component:setHDSnap,
    },
    {
      path:'/myMessage/mesHost',
      name:'mesHost',
      component:mesHost
    },
    {
      path:'/myMessage/mesNet',
      name:'mesNet',
      component:mesNet
    },
  ]
})
