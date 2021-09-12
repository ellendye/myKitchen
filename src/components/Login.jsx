import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'


const Login = props => {
    const [errors, setErrors] = useState([])
    const [loginErrors, setLoginErrors] = useState([])
    const [registerInfo, setRegisterInfo] = useState({
        username: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    })
    const [loginInfo, setLoginInfo] = useState({
        email: "", 
        password: ""
    })
    const regChangeHandler = (e) =>{
        setRegisterInfo({...registerInfo, [e.target.name]: e.target.value})
    }
    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', registerInfo, {withCredentials: true})
            .then(res => {
                console.log("Registration successfull", res)
                if(res.data.errors){
                    setErrors(res.data.errors)
                } else {
                    console.log("saved")
                    navigate('/')
                }
            })
            .catch(err=> console.log(err))
    }

    const loginChangeHandler = (e) => {
        setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
    }
    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', loginInfo, {withCredentials: true})
            .then(res=> {
                console.log("logging in response", res)
                if(res.data.message !== 'success'){
                    setLoginErrors(res.data.message)
                } else {
                    console.log("success")
                    navigate('/')
                }
            })
            .catch(err=> console.log(err))
    }
    return (
        <div className="container d-flex align-items-start justify-content-around p-5">
        <div className="border w-25">
            <h3>Log in</h3>
            <form className="p-2" onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" className="form-control" onChange= { loginChangeHandler } />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" onChange= { loginChangeHandler } />
                    {loginErrors ? <small className="text-danger">{loginErrors}</small> : ''}
                </div>
                <input type="submit" className="btn btn-success m-2" value="Login"/>
            </form>
        </div>
        
        <div className="border w-50">
            <h3>Create a MyKitchen Account</h3>
            <form className="p-2" onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange= { regChangeHandler } type="text" name="username" className="form-control" />
                    {errors.username ? <small className="text-danger">{errors.username.message}</small> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange= { regChangeHandler } type="text" name="email" className="form-control" />
                    {errors.email ? <small className="text-danger">{errors.email.message}</small> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange= { regChangeHandler } type="password" name="password" className="form-control" />
                    {errors.password ? <small className="text-danger">{errors.password.message}</small> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange= { regChangeHandler } type="password" name="confirmPassword" className="form-control" />
                    {errors.confirmPassword ? <small className="text-danger">{errors.confirmPassword.message}</small> : ''}
                </div>

                <input type="submit" className="btn btn-success m-2" value="Register"/>
            </form>
        </div>
        
        </div>
        )
}

export default Login;