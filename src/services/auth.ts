import { userLogin } from '@/api'
import { UserLoginInterface } from '@/interfaces'
export const loginFlow = async (props:UserLoginInterface) => {
    const { email, password } = props
    const { data, status } = await userLogin(email, password)
    if (status === 200) {
        console.log(data);
        const { auth: {access_token} } = data
        console.log(access_token);
        
        localStorage.setItem("token",access_token)
        return  true
    }
    return false
}

// export const checkUserToken = async () => {

// }
//https://codesandbox.io/s/fvvvt?file=/src/lib/react-query.tsx:190-208