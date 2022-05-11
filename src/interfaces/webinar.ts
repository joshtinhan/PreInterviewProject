export interface PostListData {
    id: number
    created_at: string
    title: string
    content: string & object 
    // content:{
    //     blocks:Text[]
    // } & string & object
    favourited: boolean
}
