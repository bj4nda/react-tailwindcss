import React, {useState} from 'react'

function LogIn() {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const login = () => {}
  return (
    <div className='login'> 
    <label>LogIn</label>
    <input 
    placeholder='Username' 
    onChange={(e) => {
        setUserName(e.target.value)
    }}/>
    <input 
    placeholder='Password' 
    onChange={(e) => {
        setPassword(e.target.value)
    }}/>
     </div>
  )
}

export default LogIn