export type Dictionary<T> = { [key: string]: T }

export interface Route {
  path: string
  name?: string
  component: {
    render(): string
  }
  params?: Dictionary<string>
  redirect?: string
  callback?: Function
}

export interface RouterOptions {
  mode?: string
  routes?: Route[]
}

export enum ROUTER_MODE {
  HASH = 'hash',
  HISTORY = 'history'
}

export interface IState {
  path: string
}
