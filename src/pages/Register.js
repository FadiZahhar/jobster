import React, {useState, useEffect} from 'react'
import Logo from '../components/Logo';
import Wrapper  from '../assets/wrappers/RegisterPage';

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}
const Register = () => {
    const [values,setValues] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.traget);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.traget);
    }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}></form>
    </Wrapper>
  )
}

export default Register