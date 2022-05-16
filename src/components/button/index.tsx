import { StyledButtonContainer } from './style'

interface Props {
    buttonText: string
    size: string
    backgroundColor?: string
    textColor: string
    borderColor?: string
    onClickFunc: () => void
}

const Button = (props: Props) => {
    const {
        buttonText,
        size,
        backgroundColor,
        textColor,
        borderColor,
        onClickFunc,
    } = props
    return (
        <StyledButtonContainer
            onClick={onClickFunc}
            size={size}
            backgroundColor={backgroundColor}
            textColor={textColor}
            borderColor={borderColor}
        >
            <span className='button_text'>{buttonText}</span>
        </StyledButtonContainer>
    )
}
export default Button
