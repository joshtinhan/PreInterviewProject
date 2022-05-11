import { lazy } from 'react'
const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))
const MyWebnars = lazy(() => import('../pages/myWebnars'))
const routes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/login',
        element: Login,
    },
    {
        path: '/my_webinars',
        element: MyWebnars,
    },
]

export { routes }
