import { useState, useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { StyleHeader } from './style'
import { colors } from '@/global/style'
import { AuthContext } from '@/provider/AuthProvider'
import { logOutAction } from '@/services'
import { useMutation, useQueryClient } from 'react-query'
import { useGetUserInfo, useClearUserInfo } from '@/hooks'
import { userLogout } from '@/api'
const { themeBlueColor } = colors
interface Props {
    currentRoutes: string
}

const Header = (props: Props) => {
    const data = useGetUserInfo()
    console.log(data)

    const queryClient = useQueryClient()
    const [hasToken, setHastoken] = useState<boolean>(false)
    const navigate = useNavigate()
    useMutation(userLogout, {
        onSuccess: () => console.log(123),
    })
    return (
        <StyleHeader>
            <div className='headr_left'>
                <a href=''>
                    <img src='' alt='' />
                    Logo
                </a>
            </div>

            <div className='header_right'>
                {data ? (
                    <>
                        <span>Hello {data?.data?.name}</span>
                        <Button
                            buttonText='My Webinar'
                            size='small'
                            textColor='white'
                            backgroundColor={themeBlueColor}
                            onClickFunc={() => console.log(123)}
                        />
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
