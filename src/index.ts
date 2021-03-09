import {
  Route,
  RouterOptions,
} from './types'
import HashRouter from './RouterMode/HashRoute'

export enum ROUTER_MODE {
  HASH = 'hash',
  HISTORY = 'history'
}

export default class LamentRouter {
  // 当前路由对象
  routes!: HashRouter

  options: RouterOptions

  mode: string

  constructor(options: RouterOptions = {}) {
    this.options = options
    this.mode = options.mode || 'hash'

    switch (this.mode) {
      case ROUTER_MODE.HASH:
        this.routes = new HashRouter(this, this.options.routes)
        break
      case ROUTER_MODE.HISTORY:
        break
      default:
        break
    }
  }

  get currentRoute(): Route {
    return this.routes && this.routes.current
  }
}
