import { lazy } from 'react'
const Home = lazy(() => import('../pages/home'))
const Login = lazy(() => import('../pages/login'))
const routes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/login',
        element: Login,
    },
]

export { routes }
