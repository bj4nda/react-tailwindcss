import React, {useState} from 'react'

function Register() {

    const[user, setUser] = useState(null)

    const register = () => {}
  return (
    <div className='Register'>
        <label> Register </label>
        <input placeholder='Type your name here' onChange={(ev) => {
            setUser({...user, name: ev.target.value})
        }} />
        <input placeholder='type your username here' onChange={(ev) => {
            setUser({...user, username: ev.target.value})}} />
        <input placeholder='type your email here' onChange={(ev) => {
            setUser({...user, email: ev.target.value})}} />
        <input placeholder='type your password here' onChange={(ev) => {
            setUser({...user, password: ev.target.value})}} />
            <button onClick={register}> Register</button>
    </div>
  )
}

export default Register;
