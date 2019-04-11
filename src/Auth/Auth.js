import React, { Component } from 'react'
import Forms from './Forms'
import { auth, googleProvider } from '../firebaseConfig'

class Auth extends Component {
    state = {
        isUserLoggedIn: false,
        email: '',
        password: '',
        passwordCheck: ''
    }

    componentDidMount = () => {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
            }
        )
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onLogInClick = () => {
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .catch(console.log)
    }

    onLogOutClick = () => {
        auth.signOut()
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
            .catch(console.log)
    }

    onPasswordCheckChange = () => {
        
    }

    onSignUpClick = () => {
        if(this.state.password === this.state.passwordCheck) {
            auth.signupNewUser(
                this.state.email,
                this.state.password
            )
            .catch(console.log)
        } 
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        <div>
                            <button
                                onClick={this.onLogOutClick}
                            >
                                LOG OUT
                            </button>
                            {this.props.children}
                        </div>
                        :
                        <Forms
                            email={this.state.email}
                            password={this.state.password}
                            passwordCheck={this.state.passwordCheck}

                            onEmailChange={this.onEmailChange}
                            onPasswordChange={this.onPasswordChange}

                            onLogInClick={this.onLogInClick}
                            onSignUpClick={this.onSignUpClick}
                            onLogInByGoogleClick={this.onLogInByGoogleClick}
                        />
                }
            </div>
        )
    }
}

export default Auth