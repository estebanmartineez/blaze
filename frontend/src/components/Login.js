import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '../redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({username: '', password: ''});

  const handleInputChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleLogin = () => {
    dispatch(loginRequest(credentials));
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700"
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        onClick={handleLogin}
      >
        Login
      </button>
      {auth.loading && <p className="mt-2 text-gray-600">Logging in...</p>}
      {auth.error && <p className="mt-2 text-red-600">{auth.error}</p>}
    </div>
  );
};

export default Login;
