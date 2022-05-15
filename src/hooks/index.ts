import { useQuery,QueryCache,useQueryClient } from 'react-query'
import { checkUserToken } from '@/api'

interface resType {
    data: any;
    status:number
}

export function useGetUserInfo() {
    const { data, status,remove,refetch } = useQuery('userInfo', checkUserToken,{select:value=>value.data})
    return status==='success' ? {data,remove,refetch} : false
}

export function useClearUserInfo() {
    const { data, status,remove } = useQuery('userInfo', checkUserToken)
    remove()
}