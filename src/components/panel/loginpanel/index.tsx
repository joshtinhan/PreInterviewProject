import React, { useEffect, useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import { userLogin } from '@/api'
import { loginFlow } from '@/services'
import {
    StyleContainer,
    StyleContentForm,
    StyleTitle,
    StyleContentContainer,
    StyleErrorMessage,
} from '../register/style'
import { useQuery } from 'react-query'

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
                    <div className='content-row'>
                        <label />
                        <input
                            value={email}
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleFocus}
                        />
                        <span className='error-message'>
                            {state.emailError}
                        </span>
                    </div>
                    <div className='content-row'>
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
                    </div>
                    <Button
                        buttonText='Login'
                        size='large'
                        backgroundColor='lightGray'
                        textColor='darkGray'
                        onClickFunc={() => handleLogin()}
                    />
                </StyleContentForm>
            </StyleContentContainer>
        </StyleContainer>
    )
}
export default LoginPanel
