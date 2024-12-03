import React from "react";
import "./Nav.css";
import { useState } from "react";

const Nav = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="nav_cointain">
        <div className="nav_list">
          <p>Home</p>
          <button onClick={() => setopen(true)}>login</button>
        </div>
        <div className={open ? "form_con" : "form_con1"}>
          <div className="close_btn">
            <button onClick={() => setopen(false)}>close</button>
          </div>
          <div className="form">
            <h1>LOGIN</h1>
            <h3>User Id</h3>
            <input type="text" placeholder="Enter User Id" />
            <h3>Pass</h3>
            <input type="text" placeholder="Enter Pass" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
