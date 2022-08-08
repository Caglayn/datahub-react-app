import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, signInRequest } from '../api/ApiCalls';
import { loggedIn } from '../redux/actions/DataActions';
import { useAlert } from 'react-alert';

const Login = () => {
    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();

    const dispatch = useDispatch();
    const alert = useAlert();

    const handleOnClickLogin = async () => {
        try {
            const result = await signInRequest(userName, password);
            console.log(result);
            if(result.status != null && result.status == 200){
                dispatch(loggedIn(result.data.body));
                setToken(result.data.body);
            }
        } catch (error) {
            let message = "Bad Credentials !";
            alert.show(message, {type: 'error'});
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <div className='' style={{marginTop:"15%", marginBottom:"25%", marginLeft:"35%", marginRight:"35%"}}>
                <div className="text-center">
                    <img src='img/pp.png'
                    className="img-fluid img-thumbnail rounded-circle my-3" width="200px" alt="profile"/>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="userName" placeholder="username" onChange={(event)=>{setUserName(event.target.value)}} />
                    <label htmlFor="userName">User Name</label>
                </div>
                <div className="form-floating mt-1">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="text-center mt-1">
                    <button className='btn btn-lg btn-dark w-100' type='button' onClick={handleOnClickLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;