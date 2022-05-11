import { useState } from 'react'
import Button from '@/components/button'
import { StyleHeader } from './style'
import { colors } from '@/global/style'
import { GetUserToken } from '@/services'
import {useQueries} from 'react-query'
const { themeBlueColor } = colors
interface Props {
    currentRoutes: string
}

const Header = (props: Props) => {
    const [hasToken, setHastoken] = useState<boolean>(false)

    return (
        <StyleHeader>
            <div className='headr_left'>
                <a href=''>
                    <img src='' alt='' />
                    Logo
                </a>
            </div>

            <div className='header_right'>
                {hasToken ? (
                    <>
                        <Button
                            buttonText='My Webinar'
                            size='small'
                            textColor='white'
                            backgroundColor={themeBlueColor}
                            onClickFunc={()=>console.log(123)}
                        />
                        <Button
                            buttonText={'Logout'}
                            size={'small'}
                            textColor={'theme'}
                            onClickFunc={()=>console.log(456)}
                        />
                    </>
                ) : (
                    <Button
                            buttonText={'login'}
                            size={'small'}
                            textColor={'theme'}
                            onClickFunc={()=>GetUserToken({email:"yuntest@mailinator.com",password:"A123456"})}
                    />
                )}
            </div>
        </StyleHeader>
    )
}

export default Header
