import { useState } from 'react';
import './index.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const navigate = useNavigate();

  const onUserName = (event) => {
    setName(event.target.value);
    setErrorMsg('');
    setShowErrorMsg(false);
  };

  const onPassword = (event) => {
    setPassword(event.target.value);
    setErrorMsg('');
    setShowErrorMsg(false);
  };

  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    navigate('/', { replace: true });
  };

  const onSubmitFailure = (error_msg) => {
    setShowErrorMsg(true);
    setErrorMsg(error_msg);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username: name, password: password };
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const URL = 'https://apis.ccbp.in/login';
    const response = await fetch(URL, options);
    const data = await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <div className="container">
      <div className="container-1">
        <form className="card" onSubmit={submitForm}>
          <div className="head">
            <img
              src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1752118329/Group_7420_pjzzf1.png"
              alt="logo"
              className="image"
            />
            <h1 className="heading">Tasty Kitchen</h1>
            <h2 className="heading-1">Login</h2>
          </div>

          <label htmlFor="name" className="name">Username</label>
          <input
            type="text"
            id="name"
            className="input"
            placeholder="Enter your username"
            onChange={onUserName}
            value={name}
          />

          <label htmlFor="password" className="name">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Enter your password"
            onChange={onPassword}
            value={password}
          />
          {showErrorMsg && <p className="para">*{errorMsg}</p>}
          <button className="button" type="submit">Login</button>
        </form>
      </div>

      <img
        src="https://res.cloudinary.com/dsrifdfcy/image/upload/v1752118286/Rectangle_1456_1_mzhrcc.png"
        alt="food"
        className="image-1"
      />
    </div>
  );
};

export default Login;
3