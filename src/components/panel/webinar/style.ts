import styled from 'styled-components'
import { colors } from '@/global/style'
const { themeBlueColor, greenColor ,bannerGrayColor} = colors



export const StyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    height: 300px;
    width: 380px;
    border-radius: 4px;
`
export const StyleContentContainer = styled.div`
    height:80%;
    display: flex;
    flex-direction: column;
`

export const StyleFooterContainer = styled.div`
    height:20%;
   
`

export const StyleSpanTitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color:${themeBlueColor};
    padding: 10px 6px;
`

export const StyleSpanContent = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color:${bannerGrayColor};
    padding: 10px 6px;
    overflow-y:scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
    
`

export const StylePanelFooter = styled.div`
    position:relative;
    margin-bottom:0;
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
