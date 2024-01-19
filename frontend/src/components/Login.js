import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleLogin = () => {
    dispatch(loginRequest(credentials));
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="w-1/2 border-2 border-black border-r-2"
        name="username"
        value={credentials.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="w-1/2 border-2 border-black border-r-2"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin} disabled={loading}>
        Login
      </button>
    </div>
  );
};

export default Login;
