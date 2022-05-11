import Header from '@/layouts/header'
import LoginPanel from '@/components/panel/loginpanel'
import { QueryCache } from 'react-query'
const Login = () => {
    const queryCache = new QueryCache({
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
        },
    })

    const query = queryCache.find('postsList')

    console.log(query)

    return (
        <>
            <Header currentRoutes='login' />
            <LoginPanel />
        </>
    )
}
export default Login
