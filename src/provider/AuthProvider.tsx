import { createContext, ReactNode } from 'react'
import { useGetUserInfo } from '@/hooks'

export const AuthContext = createContext<any>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const data = useGetUserInfo()
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export default AuthProvider
