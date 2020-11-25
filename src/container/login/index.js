import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  return (
    <div className="container-login">
      <div className="container-box-login">
        <div>
          <strong>Login</strong>
          {/* <a>Selamat datang di kot-eng.com</a> */}
        </div>
        <div className="content-input-login">
          <input placeholder="Masukkan username" />
          <input placeholder="Masukkan password" />
        </div>
        {/* <input>Masukkan password</input> */}

        <div className="content-button-login">
          <Link to="/home">
            <button className="btn">Login</button>
          </Link>

          <button className="btn">Sign in</button>
          <Link to="/">
            <button className="btn">Kembali</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
