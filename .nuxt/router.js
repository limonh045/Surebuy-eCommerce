import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _756bf1e6 = () => interopDefault(import('../pages/search/_searchResult.vue' /* webpackChunkName: "pages/search/_searchResult" */))
const _44553c12 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _b61117ce = () => interopDefault(import('../pages/_catagory.vue' /* webpackChunkName: "pages/_catagory" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/search/:searchResult?",
    component: _756bf1e6,
    name: "search-searchResult"
  }, {
    path: "/",
    component: _44553c12,
    name: "index"
  }, {
    path: "/:catagory",
    component: _b61117ce,
    name: "catagory"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
