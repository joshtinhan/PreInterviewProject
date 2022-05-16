import {favoritePost} from '@/api'

export const favoritePostFlow = async (id: string) =>{
    await favoritePost(id)
}