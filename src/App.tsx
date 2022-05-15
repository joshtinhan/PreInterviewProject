import React, {
    Suspense,
    useContext,
    useRef,
    createContext,
    ReactNode,
    ElementType,
    FunctionComponent,
} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useNavigate,
    Navigate,
} from 'react-router-dom'
import AuthProvider, { AuthContext } from '@/provider/AuthProvider'
import { routes } from './routers'
import { checkUserToken } from '@/api'
import { AxiosResponse } from 'axios'
import { useGetUserInfo } from '@/hooks'
// const AuthProvider = (props: any) => {

//     return <AuthContext.Provider value={accessTokenRef}></AuthContext.Provider>
// }
interface ResData {
    status?: number
    data?: any
}

function App() {
    const useAuth = () => {
        return useContext(AuthContext)
    }

    const RequireAuth = ({ children }: { children: JSX.Element }) => {
        const auth = useAuth()
        return auth?.status === 200 ? (
            children
        ) : (
            <Navigate to='/login' replace />
        )
    }
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {routes.map(
                        ({ element: Element, path, requireAuth }, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={path}
                                    element={
                                        requireAuth ? (
                                            <RequireAuth>
                                                <Element />
                                            </RequireAuth>
                                        ) : (
                                            <Element />
                                        )
                                    }
                                />
                            )
                        }
                    )}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App
