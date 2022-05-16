import { useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { loginFlow } from '@/services'
import {
    StyleContainer,
    StyleContentForm,
    StyleTitle,
    StyleContentContainer,
    StyleErrorMessage,
    StyleContentRow,
} from '../register/style'
import { colors } from '@/global/style'
const { darkGray, lightGray, buttonBgGray } = colors

enum ActionKind {
    EMAIL = 'email',
    PASSWORD = 'password',
    CLEAR = 'clearAll',
}

interface ReducerAction {
    type: string
    payload: string
}

interface ReducerState {
    passwordError: string
    emailError: string
}

const LoginPanel = () => {
    const navigate = useNavigate()
    const INITIAL_STATE = {
        passwordError: '',
        emailError: '',
    }
    const reducer = (state: ReducerState, action: ReducerAction) => {
        const { type, payload } = action
        switch (type) {
            case ActionKind.EMAIL:
                return {
                    ...state,
                    emailError: payload,
                }
            case ActionKind.PASSWORD:
                return {
                    ...state,
                    passwordError: payload,
                }
            case ActionKind.CLEAR:
                return {
                    ...INITIAL_STATE,
                }
            default:
                throw new Error('unknown action type')
        }
    }
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = async () => {
        const res = await loginFlow({ email, password })
        console.log(res)

        if (res) {
            return navigate('/')
        }
        dispatch({
            type: ActionKind.PASSWORD,
            payload: 'Incorrect email or password.',
        })
    }

    const handleFocus = () => {
        dispatch({
            type: ActionKind.CLEAR,
            payload: '',
        })
    }

    return (
        <StyleContainer>
            <StyleContentContainer>
                <StyleTitle>
                    <h2>Login</h2>
                </StyleTitle>
                <StyleContentForm>
                    <StyleContentRow>
                        <label />
                        <input
                            value={email}
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleFocus}
                        />
                    </StyleContentRow>
                    <StyleContentRow>
                        <label />
                        <input
                            value={password}
                            placeholder='password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={handleFocus}
                        />
                        <StyleErrorMessage>
                            {state.passwordError}
                        </StyleErrorMessage>
                    </StyleContentRow>
                    <Button
                        buttonText='Login'
                        size='large'
                        backgroundColor={buttonBgGray}
                        textColor={email && password ? darkGray : lightGray}
                        borderColor='none'
                        onClickFunc={() => handleLogin()}
                    />
                </StyleContentForm>
            </StyleContentContainer>
        </StyleContainer>
    )
}
export default LoginPanel
