import React from 'react'
import RegisterButton from '@/assets/images/registerButton.png'
import {
    StyleSpanTitle,
    StyleSpanContent,
    StyleWrapper,
    StylePanelFooter,
} from './style'
import { PostListData } from '@/interfaces'

interface Props {
    webinarData: PostListData
}

const Webinar = (props: Props) => {
    const {
        webinarData: {
            id,
            title,
            created_at,
            content: { blocks },
            favourited,
        },
    } = props
    console.log(blocks[0]['123456'])

    return (
        <StyleWrapper>
            <StyleSpanTitle className='title'>{created_at}</StyleSpanTitle>
            <StyleSpanTitle className='title'>{title}</StyleSpanTitle>
            <StyleSpanContent className='content'>
                {blocks[0]['text']}
            </StyleSpanContent>
            <StyleSpanContent className='content'>
                {created_at}
            </StyleSpanContent>
            {!favourited ? (
                <StylePanelFooter className='panel-footer'>
                    <span>Register Now</span>
                    <a href=''>
                        <img src={RegisterButton} alt='' />
                    </a>
                </StylePanelFooter>
            ) : null}
        </StyleWrapper>
    )
}
export default Webinar
