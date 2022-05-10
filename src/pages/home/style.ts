import styled,{css} from 'styled-components/'
import { colors}  from '@/global/style'

const {themeBlueColor,bannerGrayColor,pageBackgroundColor} = colors

const container = css`
    width: 85%;
    margin: 0 auto;
`
export const StyleContainer = styled.div`
    ${container}
`

export const StyleBannerSection = styled.div`
    width:100%;
    background-color:#FFFFFF;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h2{
        color: ${themeBlueColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 40px;
    }
    p{
        color: ${bannerGrayColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width:800px;
        text-align: center;
    }
`

export const StyleWebinarsContainer = styled.div`
    background-color:${pageBackgroundColor};
`

export const StyleWebinarsSection = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    padding: 80px 0;
`

export const StyleRegisterSection = styled.div`
    width:100%; 
    padding: 80px 0;
`