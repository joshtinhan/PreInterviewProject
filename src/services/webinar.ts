import {favoritePost} from '@/api'

export const favoritePostFlow = async (id: string) =>{
    console.log(id);
    
    const result  = await favoritePost(id)
    console.log(result);
}