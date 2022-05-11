import { StyledButtonContainer } from './style'

interface Props {
    buttonText: string
    size: string
    backgroundColor?: string
    textColor: string
    onClickFunc: () => void
}

const Button = (props: Props) => {
    const { buttonText, size, backgroundColor, textColor, onClickFunc } = props
    return (
        <StyledButtonContainer
            onClick={onClickFunc}
            size={size}
            backgroundColor={backgroundColor}
            textColor={textColor}
        >
            <span className='button_text'>{buttonText}</span>
        </StyledButtonContainer>
    )
}
export default Button
