import Header from '@/layouts/header'
import Webinar from '@/components/panel/webinar'
import {
    StyleWebinarsContainer,
    StyleContainer,
    StyleWebinarsSection,
} from '../home/style'
import { getPost, unFavoritePost } from '@/api'
import { useQuery } from 'react-query'
import { PostListData } from '@/interfaces'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Container = () => {
    const { data: postsListData, refetch } = useQuery('postsList', getPost, {
        select: ({ data: { data } }) =>
            data
                .map((value: PostListData) => {
                    const { id, created_at, title, content, favourited } = value
                    return {
                        id,
                        title,
                        created_at: moment(created_at).format('DD/MM/YYYY'),
                        content: JSON.parse(content),
                        expiredDate: moment(created_at)
                            .add(10, 'days')
                            .format('DD/MM/YYYY HH:MM'),
                        favourited,
                    }
                })
                .filter((value: any) => value.favourited),
        refetchInterval: false,
    })

    const handleClickIcon = async (id: number) => {
        await unFavoritePost(id)
        refetch()
    }

    return (
        <>
            <StyleWebinarsContainer>
                <StyleContainer>
                    <StyleWebinarsSection>
                        {postsListData?.map((value: PostListData) => (
                            <Webinar
                                propFunc={() => handleClickIcon(value.id)}
                                webinarData={value}
                                key={value.id}
                            />
                        ))}
                    </StyleWebinarsSection>
                </StyleContainer>
            </StyleWebinarsContainer>
        </>
    )
}

const MyWebnars = () => {
    return (
        <>
            <StyleContainer>
                <Header currentRoutes='my_webnars' />
            </StyleContainer>
            <Container />
        </>
    )
}

export default MyWebnars
