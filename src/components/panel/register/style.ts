import styled from 'styled-components'
import { colors } from '@/global/style'
const { themeBlueColor,lightGrayColor,middleGray } = colors

export const StyleContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:1px solid #DBDBDB;
    box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
    border-radius: 20px;
`

export const StyleContentContainer = styled.div`
    width:50%;
`

export const StyleTitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    >h2{
        text-align:center;
        color:${themeBlueColor};
    }
    >p{
        text-align:center;
        color:${lightGrayColor};
    }
`

export const StyleContentForm = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px 0;
`

export const StyleContentRow = styled.div`

`

