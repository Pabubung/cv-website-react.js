import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// import {Link}

function Splash() {
  return (
    <div className="container-box">
      <div className="box-content">
        <label className="content-label">Selamat Datang!!!</label>
        {/* <strong>Selamat Datang !!!</strong> */}

        <Link to="/login">
          <button className="content-button">Lanjut ke halaman Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
