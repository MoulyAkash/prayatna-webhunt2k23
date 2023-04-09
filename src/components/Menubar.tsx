import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import UserIcon from "../assets/user-icon.png";

export default function Menubar({ page, setPage, pages }: any) {
  const navigate = useNavigate();
  return (
    <div className="menu-bar">
      <div className="logo">MIT</div>
      <div className="right-items">
        {/* {pages.map((item, index) => (
          <div
            className="menu-bar-button"
            key={index}
            onClick={() => setPage(item)}
          >
            {item}
          </div>
        ))} */}
        <div className="profile">
          <img src={UserIcon} className="profile-icon"></img>
          <div
            className="profile-logout-text"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
