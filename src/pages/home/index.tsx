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
    StyleBannerSection,
    StyleWebinarsContainer,
    StyleRegisterSection,
    StyleContainer,
    StyleWebinarsSection,
} from './style'
import { getPostList, getPost } from '@/api'
import { useQuery, QueryCache, useQueryClient } from 'react-query'
import { PostListData } from '@/interfaces'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import {} from '@/hooks'

const Container = () => {
    const navigate = useNavigate()
    const registerRef = useRef() as MutableRefObject<HTMLDivElement>
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

    const handleClickRegister = () => {
        if (!localStorage.getItem('token')) {
            return navigate('/login')
        }
        if (registerRef && registerRef.current) {
            registerRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

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
                            <Webinar
                                propFunc={handleClickRegister}
                                webinarData={value}
                                key={value.id}
                            />
                        ))}
                    </StyleWebinarsSection>
                </StyleContainer>
            </StyleWebinarsContainer>
            <StyleContainer>
                <StyleRegisterSection ref={registerRef}>
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
