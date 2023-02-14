import React from "react";
// import { icons } from "react-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const showNav = () => {
    setShow(!show);
  };
  const ToHome = () => {
    navigate("/");
  };
  const close = () => {
    setShow(false);
  };
  return (
    <>
      <div className="navd">
        <h2 onClick={ToHome}>Portfolio</h2>
        <ul className={show ? "uldesign" : "active"}>
          <Link to={"/"} onClick={close}>
            Home
          </Link>
          <Link to={"/about"} onClick={close}>
            About
          </Link>
          <Link to={"/contact"} onClick={close}>
            Contact
          </Link>
          {/* <Link to={"/login"} onClick={close}>
            Login
          </Link> */}
        </ul>
        {show ? (
          <AiOutlineClose className="navicon closeicon" onClick={showNav} />
        ) : (
          <AiOutlineMenu className="navicon closeicon" onClick={showNav} />
        )}
      </div>
    </>
  );
}

export default Navbar;
