import react, { useEffect, useState } from 'react'
import Button from '@/components/button'
import {
    StyleContainer,
    StyleContentForm,
    StyleTitle,
    StyleContentContainer,
    StyleErrorMessage,
} from './style'
interface Props {
    topics: string
}

const Register: React.FC<Props> = ({ topics }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

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
                    <div className='content-row'>
                        <span className='row-title'>Topic</span>
                        <select name='' id=''>
                            <option value="23/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading"></option>
                        </select>
                    </div>
                    <div className='content-row'>
                        <span className='row-title'>First Name</span>
                        <label />
                        <input
                            value={firstName}
                            id=''
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <span className='error-message'>required</span>
                    </div>
                    <div className='content-row'>
                        <span className='row-title'>Last Name</span>
                        <label />
                        <input
                            value={lastName}
                            id=''
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <span className='error-message'>required</span>
                    </div>
                    <div className='content-row'>
                        <span className='row-title'>Email</span>
                        <label />
                        <input
                            value={email}
                            id=''
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className='error-message'>required</span>
                    </div>
                    <Button
                        buttonText='Register'
                        size='large'
                        backgroundColor='lightGray'
                        textColor='darkGray'
                        onClickFunc={() => console.log(456)}
                    />
                </StyleContentForm>
            </StyleContentContainer>
        </StyleContainer>
    )
}

export default Register
