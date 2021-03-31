# Lament

This is a Lightweight pure native routing

## Installation

[![NPM](https://nodei.co/npm/lament.png?compact=true)](https://npmjs.org/package/npm-badge)


## API

#### push(options: Route)

动态的导航到一个新 URL

```js
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
```

#### get currentRoute(): Route

获取当前路由对象
