import { StyledButtonContainer } from './style'

interface Props {
    buttonText: string
    size: string
    backgroundColor?: string
    textColor: string
}

const Button = (props: Props) => {
    const { buttonText, size, backgroundColor, textColor } = props
    return (
        <StyledButtonContainer
            size={size}
            backgroundColor={backgroundColor}
            textColor={textColor}
        >
            <span className='button_text'>{buttonText}</span>
        </StyledButtonContainer>
    )
}
export default Button
