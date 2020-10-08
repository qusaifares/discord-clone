import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import './Register.css';

interface Props {}

interface RegisterInfo {
  email: string;
  username: string;
  password: string;
}

const Register: React.FC<Props> = () => {
  const [inputValues, setInputValues] = useState<RegisterInfo>({
    email: '',
    username: '',
    password: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className='register'>
      <div className='register__content container'>
        <form onSubmit={handleSubmit} className='register__form'>
          <h2 className='register__formTitle'>Create an account</h2>
          <CustomInput
            fullWidth
            type='email'
            label='Email'
            name='email'
            value={inputValues.email}
            onChange={handleChange}
          />
          <CustomInput
            fullWidth
            type='text'
            label='Username'
            name='username'
            maxLength={20}
            value={inputValues.username}
            onChange={handleChange}
          />
          <CustomInput
            fullWidth
            type='password'
            label='Password'
            name='password'
            value={inputValues.password}
            onChange={handleChange}
          />
          <CustomButton type='submit' className='register__submit' fullWidth>
            Continue
          </CustomButton>
          <Link to='/login' className='register__formLink'>
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
