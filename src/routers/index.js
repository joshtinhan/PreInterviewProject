import { lazy } from 'react'
const Home = lazy(() => import('../pages/home'))
const Login = () => <div>123</div>
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
