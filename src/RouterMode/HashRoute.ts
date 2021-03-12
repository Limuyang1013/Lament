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

  /***
   * 定位到默认路由
   * @param {Route[]} routes
   */
  init(routes: Route[]) {
    this.register()
  }

  /***
   * 获取当前url的hash地址
   * @returns {string}
   */
  parseHash (): string {
    return location.hash.slice(1).toLowerCase() || '/'
  }

  routeTo(path: string) {
    const currentRoute = this.findComponentByPath(path, this.routes)
    if (currentRoute) {
      const { component } = currentRoute
      document.getElementById('app')!.innerHTML = component.render()
      this.current = currentRoute
    }
  }

  findComponentByPath (path: string, routes: Route[]): Route | undefined {
    const routePath = routes.find(r => r.path === path)
    return routePath && routePath.redirect ? this.findComponentByPath(routePath.redirect, this.routes) : routePath
  }

  register() {
    window.addEventListener('hashchange', () => { this.routeTo(this.parseHash())})
    window.addEventListener('load', () => { this.routeTo(this.parseHash())})
  }

  push(path: string) {
    location.hash = `#${path}`
  }
}
