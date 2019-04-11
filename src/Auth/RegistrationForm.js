import React from 'react'

const RegistrationForm = (props) => (
    <div>
        <input
            type={'text'}
            value={props.email}
            onChange={props.onEmailChange}
        />
        <input
            type={'password'}
            value={props.password}
            onChange={props.onPasswordChange}
        />
        <input
            type={'password'}
            value={props.password}
            onChange={props.onPasswordChange}
        />
        <button
            onChange={props.onSignUpClick}
        >
            SIGN IN
        </button>
    </div>
)

export default RegistrationForm 