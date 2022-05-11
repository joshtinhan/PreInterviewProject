import React from 'react'
import RegisterButton from '@/assets/images/registerButton.png'
import {
    StyleSpanTitle,
    StyleSpanContent,
    StyleWrapper,
    StylePanelFooter,
    StyleContentContainer,
    StyleFooterContainer,
} from './style'
import { PostListData } from '@/interfaces'

interface Props {
    webinarData: PostListData
    propFunc: () => void
}

const Webinar = (props: Props) => {
    const {
        webinarData: {
            id,
            title,
            created_at,
            content: { blocks },
            favourited,
            expiredDate,
        },
        propFunc,
    } = props
    return (
        <StyleWrapper>
            <StyleContentContainer>
                <StyleSpanTitle className='title'>{created_at}</StyleSpanTitle>
                <StyleSpanTitle className='title'>{title}</StyleSpanTitle>
                <StyleSpanContent className='content'>
                    {blocks[0].text}
                </StyleSpanContent>
                <StyleSpanContent className='content'>
                    {expiredDate}
                </StyleSpanContent>
            </StyleContentContainer>
            <StyleFooterContainer>
                <StylePanelFooter className='panel-footer'>
                    <span>{!favourited ? 'Register Now' : 'Unregister'}</span>
                    <a href='javascript:void(0)' onClick={propFunc}>
                        <img src={RegisterButton} alt='' />
                    </a>
                </StylePanelFooter>
            </StyleFooterContainer>
        </StyleWrapper>
    )
}
export default Webinar
