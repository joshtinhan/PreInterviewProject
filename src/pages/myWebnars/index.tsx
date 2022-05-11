import React, {
    useEffect,
    useState,
    useRef,
    useCallback,
    MutableRefObject,
} from 'react'
import Header from '@/layouts/header'
import Webinar from '@/components/panel/webinar'
import Register from '@/components/panel/register'
import {
    StyleWebinarsContainer,
    StyleContainer,
    StyleWebinarsSection,
} from '../home/style'
import { getPostList, getPost } from '@/api'
import { useQuery, QueryCache } from 'react-query'
import { PostListData } from '@/interfaces'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Container = () => {
    const navigate = useNavigate()
    const { data: postsListData } = useQuery('postsList', getPost, {
        select: ({ data: { data } }) =>
            data.map((value: PostListData) => {
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
            }),
        refetchInterval: false,
    })
    // console.log(postsListData)

    const handleClickIcon = () => {}

    return (
        <>
            <StyleWebinarsContainer>
                <StyleContainer>
                    <StyleWebinarsSection>
                        {postsListData?.map((value: PostListData) => (
                            <Webinar
                                propFunc={handleClickIcon}
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
