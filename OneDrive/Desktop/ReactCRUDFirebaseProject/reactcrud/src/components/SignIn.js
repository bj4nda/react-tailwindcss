/* import React, { useRef } from 'react'
import { auth } from '../firebase-config.js';
import './signin.css'


const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
            ).then(user => {
                console.log(user)
            }).catch(err => {
                console.log(err)
            })
        }

    return (
        <div className='signin'>
            <form action="">
                <h1> Sign in</h1>
                <input ref={emailRef} type="email"/>
                <input ref={passwordRef} type="password"/>
                <button> SignIn </button>
                <h6> Not regitered yet? <span onClick={signUp} className='sigin_link'> Sign In  </span></h6>
            </form> 
        </div>
    )
}


export default SignIn


 */