import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../confing/BaseURL';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    axios.post(BASE_URL + "api/Account/register",JSON.stringify(data),{
      headers:{
        "Content-Type":'application/json'
      }
    })
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="First-Name"
          {...register('firstName', {
            required: 'this is a required',
            maxLength: {
              value: 2,
              message: 'Max length is 2',
            },
          })}
        />
        <br />
        {errors.firstName && errors.firstName.message}
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          placeholder="LastName"
          {...register('lastName', {
            required: 'this is required',
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
          })}
        />
        <br />
        {errors.lastName && errors.lastName.message}
        <br />

        <label htmlFor="email">Email</label>
        <input
          placeholder="E-mail"
          type="text"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          placeholder="password"
          type="password"
          {...register('password', {
            required: 'this is required',
            
          })}
        />
        <br />
        <label htmlFor="Password">ConfirmPassword</label>
        <input
          placeholder="Confirmpassword"
          type="password"
          {...register('confirmpassword', {
            required: 'this is required',
            
          })}
        />
        {errors.email && errors.email.message}
        <br />
        <button type="submit">Submit</button>
        <Link to="/loginreal" >
        <span>Login</span>
        </Link>
      </form>
    </div>
  );
}