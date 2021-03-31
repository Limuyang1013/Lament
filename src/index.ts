import {
  Route,
  RouterOptions,
  ROUTER_MODE
} from './types'
import { HashRouter, HistoryRouter } from './RouterMode'

export default class LamentRouter {
  // 当前路由对象
  router!: HashRouter | HistoryRouter

  options: RouterOptions

  mode: string

  constructor(options: RouterOptions = {}) {
    this.options = options
    this.mode = options.mode || 'hash'

    switch (this.mode) {
      case ROUTER_MODE.HASH:
        this.router = new HashRouter(this, this.options.routes)
        break
      case ROUTER_MODE.HISTORY:
        this.router = new HistoryRouter(this, this.options.routes)
        break
      default:
        break
    }
  }

  get currentRoute(): Route {
    return this.router && this.router.current
  }

  push(options: Route) {
    this.router.push(options)
  }
}
