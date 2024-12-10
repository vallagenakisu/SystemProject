import React, { useRef } from 'react'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';
const Login = () => {
  const email = useRef();
  const pass = useRef();

  const {user, token, setUser,setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: pass.current.value
    }
    axiosClient.post('/login', data).then((response) => {
      console.log(response.data.user);
      console.log(response.data.token);
      setToken(response.data.token);
      setUser(response.data.user);

    }).catch((error) => {
      console.log(error.response.data);
    });
  }

  return (
    <div className='flex flex-col justify-center p-5 items-center gap-5  ' >
      <input ref={email} className='m-1 p-2 rounded-lg'  type="email" placeholder='Enter Your Email' />
      <input ref={pass} className='m-1 p-2 rounded-lg' type="password" placeholder='Enter Your Password' />
      <button onClick={onSubmit} className='bg-black text-white p-2 rounded-lg' >Login</button>
      <button className='bg-black text-white p-2 rounded-lg' >get</button>
    </div>
  )
}

export default Login
