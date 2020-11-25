// import React, { Component, useState } from 'react';
// import "./navbar.css"

// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             click:false,
//             button: true
//         }

//     }

//     componentDidMount(){
//     }

//     render() {
//         return (
//             <div className="navbar-container">
//                 <p>Home</p>
//                 <p>Experience</p>
//                 <p>Contact</p>
//             </div>
//         );
//     }
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import "./navbar.css";

import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 500) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <div className="navbar-container">
      <div className="menu-icon" onClick={handleClick}>
        {click ? (
          <RiCloseLine style={{ padding: "20px" }} />
        ) : (
          <RiMenu4Line style={{ padding: "20px" }} />
        )}
      </div>

      <div className={click ? "navbar-menu active" : "navbar-menu"}>
        <p>Home</p>
        <p>Experience</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
