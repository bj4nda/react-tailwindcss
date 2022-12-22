import React, {useState} from 'react'

function Login() {
    const[userName, setUserName] = useState(null)
    const[password, setPassword] = useState(null)

    const logIn = () => {}
  return (
    <div className='Login'>
        <label> Login </label>
        <input placeholder='type your username here' onChange={(ev) => {
            setUserName( ev.target.value)}} />
        
        <input placeholder='type your password here' onChange={(ev) => {
            setPassword( ev.target.value)}} />
            <button onClick={logIn}> Login</button>
    </div>
  )
}

export default Login