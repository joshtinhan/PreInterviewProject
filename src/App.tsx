import React, { Suspense, useContext, useRef, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { routes } from './routers'
import { checkUserToken } from '@/api'
import { AxiosResponse } from 'axios'
// const AuthProvider = (props: any) => {

//     return <AuthContext.Provider value={accessTokenRef}></AuthContext.Provider>
// }

function App() {
    const AuthContext = createContext<AxiosResponse | null>(null)
    const AuthContextProvider = (props: any) => {
        const { data } = useQuery('userData', checkUserToken, {
            refetchInterval: 300000,
            refetchIntervalInBackground: true,
        })
        console.log(data)

        return (
            <AuthContext.Provider value={data}>
                {props.children}
            </AuthContext.Provider>
        )
    }
    return (
        <AuthContextProvider
            children={
                <BrowserRouter>
                    <Routes>
                        {routes.map(({ element: Element, path }, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={path}
                                    element={
                                        <Suspense fallback={<>...</>}>
                                            <Element />
                                        </Suspense>
                                    }
                                />
                            )
                        })}
                    </Routes>
                </BrowserRouter>
            }
        ></AuthContextProvider>
    )
}

export default App
