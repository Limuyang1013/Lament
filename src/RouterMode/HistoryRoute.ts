import LamentRouter from '../index'
import { Base } from './Base'
import { Route, IState } from '../types'

export default class HistoryRouter extends Base {
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

  register() {
    window.addEventListener('popstate', (e) => {
      console.log('111')
      this.routeTo(e.state || { path: '/' })
    })
    window.addEventListener('load', () => {
      const { pathname } = location
      this.routeTo({ path: pathname })
    })
  }

  go(state: IState) {
    this.routeTo(state, true)
  }

  routeTo(state: IState, needPush: boolean = false) {
    const { path } = state
    const currentRoute = this.findComponentByPath(path, this.routes)
    if (currentRoute) {
      const { component, redirect } = currentRoute
      if (redirect) {
        history.replaceState({ path: redirect }, '', redirect)
        this.routeTo({ path: redirect })
        return
      }
      // popState的时候不需要添加记录
      if (needPush) {
        history.pushState({ path }, '', path)
      }
      document.getElementById('app')!.innerHTML = component.render()
      this.current = currentRoute
    }
  }

  findComponentByPath(path: string, routes: Route[]): Route | undefined {
    return routes.find((r) => r.path === path)
  }

  push(options: Route) {
    const { path, params } = options
    if (path === location.pathname) {
      return
    }
    this.routeTo({ path }, true)
  }
}
