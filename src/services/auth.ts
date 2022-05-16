import { userLogin, userLogout } from '@/api'
import { UserLoginInterface } from '@/interfaces'
import { useQueryClient } from 'react-query'
    

export const loginFlow = async (props:UserLoginInterface) => {
    const { email, password } = props
    try{
        const { data, status } = await userLogin(email, password)
        if (status === 200) {
            const { auth: {access_token} } = data
            localStorage.setItem("token", access_token)
            return  true
        }
    }catch(err){
        return false
    }
}

export const logOutAction = async () => {
    localStorage.removeItem("token")
    await userLogout()
}

// export const checkUserToken = async () => {

// }
//https://codesandbox.io/s/fvvvt?file=/src/lib/react-query.tsx:190-208