import React, {useState, useEffect} from 'react'
import Wrapper  from '../assets/wrappers/RegisterPage';
import { Logo,FormRow } from '../components';

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember:true
}
const Register = () => {
    const [values,setValues] = useState(initialState)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({...values,[name]:value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)) {
            console.log("Please fill the required fields");
        }
    }


    const toogleMember = () => {
        setValues({...values,isMember:!values.isMember})
    }
  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            <h3>
                {values.isMember ? 'Login' : 'Register' }
            </h3>

            {!values.isMember
            &&
            (<FormRow 
            type="text"
            name="name"
            labelText="Name"
            value={values.name}
            handleChange={handleChange}
            />)
            }

            {/* email field */}
            <FormRow 
            type="email"
            name="email"
            labelText="Email"
            value={values.email}
            handleChange={handleChange}
            />


            {/* password field */}
            <FormRow 
            type="password"
            name="password"
            labelText="Password"
            value={values.password}
            handleChange={handleChange}
            />


            <button type="submit" className="btn btn-block">
                submit
            </button>

            <p>
                {values.isMember ? 'Already a member' : 'Not a member'} 
                <button type="button" onClick={toogleMember} className='member-btn'> {values.isMember ? 'Register' : 'Login' }</button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register