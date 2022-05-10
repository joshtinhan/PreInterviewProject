import React from 'react'
import RegisterButton from '@/assets/images/registerButton.png'
import {
    StyleSpanTitle,
    StyleSpanContent,
    StyleWrapper,
    StylePanelFooter,
} from './style'
interface Props {
    webinarData: object
}

const Webinar = (props: Props) => {
    const { webinarData } = props
    return (
        <StyleWrapper>
            <StyleSpanTitle className='title'>31/10/2019</StyleSpanTitle>
            <StyleSpanTitle className='title'>
                A structured approach to deciphering FX & Gold sentiment
            </StyleSpanTitle>
            <StyleSpanContent className='content'>
                A structured approach to deciphering FX & Gold sentiment
            </StyleSpanContent>
            <StyleSpanContent className='content'>
                7pm-8:30pm EST
            </StyleSpanContent>
            <StylePanelFooter className='panel-footer'>
                <span>Register Now</span>
                <a href=''>
                    <img src={RegisterButton} alt='' />
                </a>
            </StylePanelFooter>
        </StyleWrapper>
    )
}
export default Webinar
