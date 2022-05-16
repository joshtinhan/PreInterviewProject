import { useEffect, useState, useReducer } from 'react'
import Button from '@/components/button'
import { colors } from '@/global/style'
import {
    StyleContainer,
    StyleContentForm,
    StyleTitle,
    StyleContentContainer,
    StyleErrorMessage,
    StyleContentRow,
    StyleRowTitle,
    StyleSelectBox,
} from './style'
import { favoritePostFlow } from '@/services'
import { useGetUserInfo } from '@/hooks'
import { useNavigate } from 'react-router-dom'
const { darkGray, lightGray, buttonBgGray } = colors
interface Props {
    topics: { [key: string]: string }[]
    refetch: () => void
}
enum ActionKind {
    EMAIL = 'email',
    FIRSTNAME = 'firstname',
    LASTNAME = 'lastname',
    CLEAR = 'clearAll',
}
interface ReducerAction {
    type: string
    payload: string
}

interface ReducerState {
    firstNameError: string
    lastNameError: string
    emailError: string
}

const Register: React.FC<Props> = ({ topics, refetch }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [selectedTopic, setSelectedTopic] = useState<string>('')
    const INITIAL_STATE = {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
    }
    const navigate = useNavigate()
    const data = useGetUserInfo()
    useEffect(() => {
        setSelectedTopic(topics?.[0]?.id)
    }, [topics])

    const reducer = (state: ReducerState, action: ReducerAction) => {
        const { type, payload } = action
        switch (type) {
            case ActionKind.EMAIL:
                return {
                    ...state,
                    emailError: payload,
                }
            case ActionKind.FIRSTNAME:
                return {
                    ...state,
                    firstNameError: payload,
                }
            case ActionKind.LASTNAME:
                return {
                    ...state,
                    lastNameError: payload,
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
    const handleFocus = () => {
        dispatch({
            type: ActionKind.CLEAR,
            payload: '',
        })
    }

    const checkIsEmpty = () => {
        if (firstName === '') {
            dispatch({
                type: ActionKind.FIRSTNAME,
                payload: 'First name is required.',
            })
        }
        if (lastName === '') {
            dispatch({
                type: ActionKind.LASTNAME,
                payload: 'Last name is required.',
            })
        }
        if (email === '') {
            dispatch({
                type: ActionKind.EMAIL,
                payload: 'Email is required.',
            })
        }
        return [email, firstName, lastName].every((v) => v)
    }

    const handleRegister = async () => {
        if (!data) return navigate('/login')
        if (!checkIsEmpty()) return
        favoritePostFlow(selectedTopic)
        refetch()
    }

    return (
        <StyleContainer>
            <StyleContentContainer>
                <StyleTitle>
                    <h2>Register for a Webinar now</h2>
                    <p>
                        Please fill in the form below and you will be contacted
                        within 1 working day by our professional business
                        experts.
                    </p>
                </StyleTitle>
                <StyleContentForm>
                    <StyleContentRow>
                        <StyleRowTitle className='row-title'>
                            Topic
                        </StyleRowTitle>
                        <StyleSelectBox>
                            <label htmlFor='' />
                            <select
                                value={selectedTopic}
                                onChange={(e) => {
                                    setSelectedTopic(e.target.value)
                                }}
                            >
                                {topics?.map((value) => (
                                    <option value={value?.id}>
                                        {value?.topic}
                                    </option>
                                ))}
                            </select>
                        </StyleSelectBox>
                    </StyleContentRow>
                    <StyleContentRow>
                        <StyleRowTitle className='row-title'>
                            First Name
                        </StyleRowTitle>
                        <label />
                        <input
                            value={firstName}
                            id=''
                            onChange={(e) => setFirstName(e.target.value)}
                            onFocus={handleFocus}
                        />
                        <StyleErrorMessage>
                            {state.firstNameError}
                        </StyleErrorMessage>
                    </StyleContentRow>
                    <StyleContentRow>
                        <StyleRowTitle className='row-title'>
                            Last Name
                        </StyleRowTitle>
                        <label />
                        <input
                            value={lastName}
                            id=''
                            onChange={(e) => setLastName(e.target.value)}
                            onFocus={handleFocus}
                        />
                        <StyleErrorMessage>
                            {state.lastNameError}
                        </StyleErrorMessage>
                    </StyleContentRow>
                    <StyleContentRow>
                        <StyleRowTitle className='row-title'>
                            Email
                        </StyleRowTitle>
                        <label />
                        <input
                            value={email}
                            id=''
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleFocus}
                        />
                        <StyleErrorMessage>
                            {state.emailError}
                        </StyleErrorMessage>
                    </StyleContentRow>
                    <Button
                        buttonText='Register'
                        size='large'
                        backgroundColor={buttonBgGray}
                        textColor={
                            email && firstName && lastName
                                ? darkGray
                                : lightGray
                        }
                        borderColor='none'
                        onClickFunc={() => handleRegister()}
                    />
                </StyleContentForm>
            </StyleContentContainer>
        </StyleContainer>
    )
}

export default Register
