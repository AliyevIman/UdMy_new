import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../confing/BaseURL';

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    axios.post(BASE_URL + "api/Account/login",JSON.stringify(data),{
      headers:{
        "Content-Type":'application/json'
      }
    }).then(c=>console.log(c)).catch(c=>console.log(c))
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
       
       

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
      
        {errors.email && errors.email.message}
        <br />
        <button type="submit">Submit</button>
      
      </form>
    </div>
  );
}