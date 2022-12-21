import React, {useState} from 'react'

function SignUp() {
    const [user, setUser] = useState(null);
    const signup = () => {};
  return (
    <div className='signUp'> 
    <label>SignUp</label>
    <input 
    placeholder='Your name' 
    onChange={(e) => {
        setUser({...user, firstName: e.target.value})
    }}/>
    <input 
    placeholder='Username' 
    onChange={(e) => {
        setUser({...user, lastName: e.target.value})
    }}/>
    <input 
    placeholder='Email' 
    onChange={(e) => {
        setUser({...user, lastName: e.target.value})
    }}/>
    
    <input 
    placeholder='password' 
    onChange={(e) => {
        setUser({...user, password: e.target.value})
    }}/>
     </div>
  )
}

export default SignUp