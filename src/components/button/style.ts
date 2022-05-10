import styled from 'styled-components'
import { colors}  from '@/global/style'

const {themeBlueColor} = colors

interface ContainterProps {
    size: string
    backgroundColor?: string
    textColor: string
}

export const StyledButtonContainer = styled.div<ContainterProps>`
    width: ${({size}) => (size === 'large' ? '699px' : '115px')};
    height: ${({ size }) => (size === 'large' ? '48px' : '40px')};
    border: 1px solid ${themeBlueColor};
    border-radius: 2px;
    color: ${({ textColor }) =>
        textColor === 'theme' ? themeBlueColor : '#FFFFFF'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({backgroundColor})=> backgroundColor}
` 