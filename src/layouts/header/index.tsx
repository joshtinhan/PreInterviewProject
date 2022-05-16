import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { StyleHeader } from './style'
import { colors } from '@/global/style'
import { AuthContext } from '@/provider/AuthProvider'
import { logOutAction } from '@/services'
import { useMutation, useQueryClient } from 'react-query'
import { useGetUserInfo, useClearUserInfo } from '@/hooks'
import { userLogout } from '@/api'
import Logo from '@/assets/images/logo.png'
const { themeBlueColor } = colors

interface Props {
    currentRoutes: string
}

const Header = (props: Props) => {
    const data = useGetUserInfo()
    const navigate = useNavigate()
    const { currentRoutes } = props
    return (
        <StyleHeader>
            <div className='headr_left'>
                <Link to='/'>
                    <img src={Logo} alt='' />
                </Link>
            </div>

            <div className='header_right'>
                {data ? (
                    <>
                        <span className='greetingText'>
                            Hello {data?.data?.name}
                        </span>
                        {currentRoutes !== 'my_webnars' ? (
                            <Button
                                buttonText='My Webinar'
                                size='small'
                                textColor='white'
                                backgroundColor={themeBlueColor}
                                onClickFunc={() => navigate('/my_webinars')}
                            />
                        ) : null}

                        <Button
                            buttonText={'Logout'}
                            size={'small'}
                            textColor={'theme'}
                            onClickFunc={() => {
                                logOutAction()
                                data.remove()
                                data.refetch()
                            }}
                        />
                    </>
                ) : (
                    <Button
                        buttonText={'login'}
                        size={'small'}
                        textColor={'theme'}
                        onClickFunc={() => navigate('/login')}
                    />
                )}
            </div>
        </StyleHeader>
    )
}

export default Header
