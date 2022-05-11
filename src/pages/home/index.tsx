import React, { useEffect, useState } from 'react'
import Header from '@/layouts/header'
import Webinar from '@/components/panel/webinar'
import Register from '@/components/panel/register'
import {
    StyleBannerSection,
    StyleWebinarsContainer,
    StyleRegisterSection,
    StyleContainer,
    StyleWebinarsSection,
} from './style'
import { getPostList, getPost } from '@/api'
import { useQuery, QueryCache } from 'react-query'
import { PostListData } from '@/interfaces'

const Container = () => {
    const { data: postsListData } = useQuery('postsList', getPost, {
        select: ({ data: { data } }) =>
            data.map((value: PostListData) => {
                const { id, created_at, title, content, favourited } = value
                return {
                    id,
                    title,
                    created_at,
                    content: JSON.parse(content),
                    favourited,
                }
            }),
        refetchInterval: false,
    })
    console.log(postsListData)

    return (
        <>
            <StyleContainer>
                <StyleBannerSection>
                    <h2>Forex Webinars</h2>
                    <p>
                        Whether you are new to foreign exchange trading or
                        already have some market experience, we believe that a
                        solid FX trading education is vital to your success as a
                        trader.
                    </p>
                </StyleBannerSection>
            </StyleContainer>
            <StyleWebinarsContainer>
                <StyleContainer>
                    <StyleWebinarsSection>
                        {postsListData?.map((value: PostListData) => (
                            <Webinar webinarData={value} key={value.id} />
                        ))}
                    </StyleWebinarsSection>
                </StyleContainer>
            </StyleWebinarsContainer>
            <StyleContainer>
                <StyleRegisterSection>
                    <Register topics='123445' />
                </StyleRegisterSection>
            </StyleContainer>
        </>
    )
}

const Home = () => {
    return (
        <>
            <StyleContainer>
                <Header currentRoutes='home' />
            </StyleContainer>
            <Container />
        </>
    )
}

export default Home
