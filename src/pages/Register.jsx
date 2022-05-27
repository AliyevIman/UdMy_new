import React, { useState } from "react";
import { BASE_URL } from "../api/BaseConfig";

const Register = () => {
    const [firstsname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const submitForm=(e)=>{
        e.preventDefault();
        const data= {firstsname,lastname,email,password,confirmPassword};
        fetch(`${BASE_URL}api/Account/register`,{
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'no-cors',
            method:"post",
            body:JSON.stringify(data)
        })
    }
  return (
      <div className="container my-5">
  <div className="row justify-content-center">
      <div className="col-lg-6">
          <h1 className="fs-5 mb-4">Register</h1>

        <form method="post" onSubmit={submitForm}>
          <div className="form-outline mb-4">
            <input onChange={e=>setFirstname(e.target.value)} placeholder="Firstname" type="text" id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">
              Firstname
            </label>
          </div>
          <div className="form-outline mb-4">
            <input onChange={e=>setLastname(e.target.value)} placeholder="lastname" type="text" id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">
              Lastname
            </label>
          </div>
          <div className="form-outline mb-4">
            <input onChange={e=>setEmail(e.target.value)} type="email" id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              onChange={e=>setPassword(e.target.value)}
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" for="form2Example2">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              onChange={e=>setConfirmPassword(e.target.value)}
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" for="form2Example2">
              Confirm Password
            </label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign Up
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
  
  );
};

export default Register;
