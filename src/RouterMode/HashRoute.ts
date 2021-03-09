import LamentRouter from '../index'
import { Base } from './Base'
import { Route } from '../types'

export default class HashRouter extends Base {
  constructor(router: LamentRouter, routes: Route[] | undefined) {
    super(router)
    routes && this.init(routes)
  }

  /***
   * 定位到默认路由
   * @param {Route[]} routes
   */
  init(routes: Route[]) {
    routes.forEach(route => {
      if (route.path === '/') {
        // 处理默认路由
      }
    })
  }

  push(path: string) {
    location.hash = `#${path}`
  }
}
