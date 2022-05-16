import Home from '../pages/home'
import Login from '../pages/login'
import MyWebnars from '../pages/myWebnars'
const routes = [
    {
        path: '/',
        element: Home,
        requireAuth: false,
    },
    {
        path: '/login',
        element: Login,
        requireAuth: false,
    },
    {
        path: '/my_webinars',
        element: MyWebnars,
        requireAuth: true,
    },
]

export { routes }
