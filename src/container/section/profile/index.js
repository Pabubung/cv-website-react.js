import React, { Component } from "react";
import Foto_Profile from "../../../asset/image/Foto_Profile.jpg";
import ManwithComputer from "../../../asset/image/Manwithcomputer.svg";
import "./profile.css";

// theme #C50E4F
import { FaGithub } from "react-icons/fa";
class Profile extends Component {
  render() {
    return (
      <div className="container-profile">
        <div className="container-profile-column">
          <div className="column-profile">
            <div className="row-photo">
              <img className="profile-photo" src={Foto_Profile} />
              <strong>Octovianus Pabubung</strong>
              {/* <p>Octovianus Pabubung</p> */}
            </div>

            <div className="row-caption">
              <i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque egestas turpis sit amet sapien semper, non suscipit
                dui molestie. Aliquam viverra massa ante, a semper libero
                pellentesque vel. 
                {/* Cras erat turpis, tincidunt sit amet mollis a,
                posuere eget nibh. Duis pellentesque pulvinar ullamcorper. Sed
                at lacus at magna vehicula ultricies id sit amet ligula. Aliquam
                erat volutpat. */}
              </i>
            </div>
          </div>
          <div className="column-svg">
            <img className="profile-svg" src={ManwithComputer} />
          </div>
        </div>

        {/* <div>
          <FaGithub />
        </div> */}
      </div>
    );
  }
}

export default Profile;
