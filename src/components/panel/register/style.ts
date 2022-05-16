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
    display:flex;
    flex-direction:column;
    width:100%;
    color:${middleGray};
    input, select{
        border: 1px solid #C6C6C6;
        height:40px;
    }
`
    
export const StyleRowTitle = styled.div`
    padding-bottom:8px;
`
    
export const StyleErrorMessage = styled.span`
    color:red;
`

export const StyleSelectBox = styled.div`
width:100%;
position:relative;
display:block;
    &:after{
        position:absolute;
        content: '>';
        color:#6D7278;;
        display: inline-block;
        font-weight:bold;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 10px;
        top:30%;
        
    }
    select{
        height:52px;
        -webkit-appearance: none;
        -moz-appearance: none;
        width:100%;
        text-indent:1px;
        text-overflow: '';
    }
`

