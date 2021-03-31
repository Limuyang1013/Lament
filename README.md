# Lament

This is a Lightweight pure native routing

## QuickStart

> npm imstall lament

```javascript
import LamentRouter from 'Lament'

let router = new LamentRouter({
    mode: 'hash',
    routes: [
      {
        path: '/',
        redirect: '/page1',
        component: Page1Component
      },
      {
        path: '/page1',
        component: Page1Component
      },
      {
        path: '/page2',
        component: Page2Component
      },
      {
        path: '/page3',
        component: Page3Component
      },
      {
        path: '/404',
        component: Page404Component
      }
    ]
  })
```

