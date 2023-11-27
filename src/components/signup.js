import React from 'react';
import { useState,useEffect } from 'react';
//use state to get the value from the page
import {Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    //3 states to get data
    const [name, setName] = useState(""); //1st empty state empty 2nd event
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    //after signup signup page access ni ho
    useEffect(()=>{
        const auth= localStorage.getItem('user'); 
        if(auth){
            navigate('/');//after signup cant come to sign up page again
        }
    })

    const collectData = async () => {//get all enter values
        console.warn(name, email, password);
        //integrate with backend
        let result = await fetch("http://localhost:5000/signup", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))//stores data in localstorage to retriev it afterwards
        localStorage.setItem("token", JSON.stringify(result.auth))
        if (result) {
            navigate("/");//to open homepage after signup
        }

    }


    return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <Link to="/login">Login</Link>
              </div>
              <div className="form-group mt-3">
              <div className='r4'>
                Full Name
                </div>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Name"
                  value={name/*for empty state*/} onChange={(e) => setName(e.target.value/*value set in state*/)}
                />
              </div>
              <div className="form-group mt-3">
                <div className='r4'>
               Email address
                </div>
                <input
                  type="email"
                  className="form-control mt-1"
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                  placeholder='Enter Email'
                />
              </div>
              <div className="form-group mt-3">
              <div className='r4'>
              Password
                </div>
                <input
                  type="password"
                  className="form-control mt-1"
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                  placeholder='Enter Password'
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"onClick={collectData}>
                  Sign Up
                </button>
              </div>
              
            </div>
          </form>
        </div>
      )
}
export default Signup;