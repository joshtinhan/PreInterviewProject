import styled from 'styled-components'
import { colors } from '@/global/style'
const { themeBlueColor,lightGrayColor,greenColor } = colors

export const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 300px;
    width: 380px;
    border-radius: 4px;
    margin:10px;
`
export const StyleSpanTitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color:${themeBlueColor};
    padding: 20px 6px;
`

export const StyleSpanContent = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color:${lightGrayColor};
    padding: 20px 6px;
`

export const StylePanelFooter = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 20px 6px;
    
    span{
        color:${greenColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 24px;
    }
`

export const StyleContainer = styled.div`

`
