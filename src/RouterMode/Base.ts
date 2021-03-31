import LamentRouter from '../index'
import { Route } from '../types'

export abstract class Base {
  router: LamentRouter

  current: Route

  protected constructor(router: LamentRouter) {
    this.router = router
    this.current = {
      path: '/',
      name: '',
      component: {
        render: () => ''
      },
      redirect: '',
      params: {},
      callback: () => {}
    }
  }

  abstract push(options: Route): void
}
