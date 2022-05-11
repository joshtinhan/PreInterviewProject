import { userLogin } from '@/api'
import { UserLoginInterface } from '@/interfaces'
import {useQuery,useMutation} from 'react-query'
import React from 'react'
export const GetUserToken = async (props:UserLoginInterface) => {
    const { email, password } = props
    return useMutation(() => userLogin(email, password), {
        onSuccess: data => {
            console.log(data);
            const message = "success"
            alert(message)
        }
    })
}
//https://codesandbox.io/s/fvvvt?file=/src/lib/react-query.tsx:190-208