import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login({ setUser, passwordConfirmation, setPasswordConfirmation }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [formType, setFormType] = useState(true)

    function onFormClick() {
        setFormType(formType => !formType)
    }

    let history = useHistory();
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                 history.push('/')
            }
        })
    }
    console.log(username)
    return (
        <div className="sign-container">
        <div className='signin'>
        <div class="page-bg"></div>

<div class="animation-wrapper">
  <div class="particle particle-1"></div>
  <div class="particle particle-2"></div>
  <div class="particle particle-3"></div>
  <div class="particle particle-4"></div>
</div>
            <div className={formType ? "container" : "container right-panel-active"} id="container">
                <div className="form2-container">
                    <div className="form-container sign-up-container">
                        <form className='form2-form' action="#">
                            <h1 className='form2-create'>Create Account</h1>

                           
                            <input className='form2-input' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className='form2-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input className='form2-input-end' type="password" placeholder="Password Confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                            <button className='form2-button' onClick={handleSubmit} >Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className='form2-form' action="#">
                            <h1 className='form2-signin-title'>Sign in</h1>
                            <input className='form2-input' type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className='form2-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a className='form2-a'>Forgot your password?</a>
                            <button className='form2-button' onClick={handleSubmit}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className='form2-welcome'>Already have an Account?</h1>
                                <p className='form2-subtitle'>Lets keep exploring!</p>
                                <button onClick={onFormClick} className=" form2-button ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className='form2-welcome'>Welcome</h1>
                                <p className='form2-subtitle'>Are you ready to explore the unknown?</p>
                                <button onClick={onFormClick} className="form2-button ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}
export default Login














