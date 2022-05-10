import { useState } from 'react'
import Button from '@/components/button'
import { StyleHeader } from './style'
import { colors } from '@/global/style'
const { themeBlueColor } = colors
interface Props {
    currentRoutes: string
}

const Header = (props: Props) => {
    const [hasToken, setHastoken] = useState<boolean>(true)

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
                        />
                        <Button
                            buttonText={'Logout'}
                            size={'small'}
                            textColor={'theme'}
                        />
                    </>
                ) : (
                    <Button
                        buttonText={'login'}
                        size={'small'}
                        textColor={'theme'}
                    />
                )}
            </div>
        </StyleHeader>
    )
}

export default Header
