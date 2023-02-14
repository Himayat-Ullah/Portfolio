import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="footerd">
      <div className="ficond">
        <FaFacebookF />
        <FaLinkedinIn />
        <GrInstagram />
      </div>
      <p className="firstp">Term of use Privacy policy</p>
      <p className="lastp">@2023 Portfolio</p>
    </div>
  );
}

export default Footer;
