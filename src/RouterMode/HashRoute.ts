import LamentRouter from '../index'
import { Base } from './Base'
import { Route } from '../types'

export default class HashRouter extends Base {
  routes: Route[]

  constructor(router: LamentRouter, routes: Route[] | undefined) {
    super(router)
    this.routes = routes!
    this.init(this.routes)
  }

  /** *
   * 注册默认路由
   * @param {Route[]} routes
   */
  init(routes: Route[]) {
    this.register()
  }

  /**
   * 获取当前url的hash地址
   * @returns {string}
   */
  parseHash(): string {
    return location.hash.slice(1).toLowerCase() || '/'
  }

  /**
   * 获取纯url地址
   * @returns {string}
   */
  parsePureUrl(): string {
    return location.href.split('#')[0]
  }

  routeTo(path: string) {
    const currentRoute = this.findComponentByPath(path, this.routes)
    if (currentRoute) {
      const { component, redirect } = currentRoute
      if (redirect) {
        window.location.replace(`${this.parsePureUrl()}#${redirect}`)
        return
      }
      document.getElementById('app')!.innerHTML = component.render()
      this.current = currentRoute
    }
  }

  findComponentByPath(path: string, routes: Route[]): Route {
    return <Route>routes.find((r) => r.path === path)
  }

  register() {
    window.addEventListener('hashchange', () => { this.routeTo(this.parseHash()) })
    window.addEventListener('load', () => { this.routeTo(this.parseHash()) })
  }

  push(options: Route) {
    const { path, params } = options
    if (path === this.parseHash()) {
      return
    }
    location.hash = `#${path}`
  }
}
