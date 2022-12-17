import React from "react";
import "./navbar.scss";
import { NavAuth, NavUser } from "./";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.auth);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav_wrap">
          <div className="nav_logo"></div>

          {isAuth && user ? <NavUser avatar={user.avatar} /> : <NavAuth />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
