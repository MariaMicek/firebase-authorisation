import React from 'react'
import LogInForm from './LogInForm'
import LogInByGoogleForm from './LogInByGoogleForm'
import RegistrationForm from './RegistrationForm'

const Forms = (props) => (
    <div>
        <LogInForm
            email={props.email}
            password={props.password}
            onEmailChange={props.onEmailChange}
            onPasswordChange={props.onPasswordChange}
            onLogInClick={props.onLogInClick}
        />
        {/* <LogInByGoogleForm /> */}
        {/* <RegistrationForm
            email={props.email}
            password={props.password}
            onEmailChange={props.onEmailChange}
            onPasswordChange={props.onPasswordChange}
            onSignInClick={props.onSignUpsClick}
        /> */}
    </div>
)

export default Forms 