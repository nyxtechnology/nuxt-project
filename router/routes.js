import Home from '~/components/pages'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@pages/Home')
  }
]

