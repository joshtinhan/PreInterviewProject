export interface PostListData {
    id: number
    created_at: string
    title: string
    content:{
        [key: string]: any
    } & string
    favourited: boolean
    expiredDate:string
}
interface Text{
    text:string
}
