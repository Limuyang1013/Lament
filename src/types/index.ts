/* 单路由配置 * */
export interface Route {
  path?: string
  name?: string
  component: HTMLElement | string
  redirect?: string
  callback?: Function
}

/* 路由初始化参数 * */
export interface RouterOptions {
  mode?: string
  routes?: Route[]
}
