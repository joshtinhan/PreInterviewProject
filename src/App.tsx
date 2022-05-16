import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthProvider from '@/provider/AuthProvider'
import { useQuery } from 'react-query'
import { routes } from './routers'
import { checkUserToken } from '@/api'

function App() {
    const RequireAuth = ({ children }: { children: JSX.Element }) => {
        const auth = useQuery('userInfo', checkUserToken, {
            select: (value) => value.data,
        })

        return auth?.status == 'success' ? (
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
