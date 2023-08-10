import React, {useState} from 'react';
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8085/api/login/authenticate', userData)
      .then((response) => {
        // Successful login logic (e.g., redirect to dashboard)
        console.log(response.data);
        props.history.push('/form');
      })
      .catch((error) => {
        setErrorMessage('Invalid email or password');
      });
  };

  return (
    <div className="container">
    <div className="form-wrap">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Email</label>
          <input required placeholder="email/username" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-element">
          <label>Password</label>
          <input required placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className="submit-button" type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      </div>
    </div>
  );
  }
  export default Login;