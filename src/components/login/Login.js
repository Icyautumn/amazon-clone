import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider/StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // prevents page from refreshing
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
    .then(auth=> {
      navigate("/");
    })
    .catch(error => alert(error.message))
    // some fancy firebaske login
  };

  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase register
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // successfully created a new user
      console.log(auth);
      if(auth){
        navigate('/');
      }
    })
    .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </NavLink>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
