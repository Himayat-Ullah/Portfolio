import React from "react";
import image from "../img/Himayat.png";
import pdf from "../documnents/1.pdf";
import Typical from "react-typical";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";

function Home() {
  let navigate = useNavigate();
  const ToContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="maindiv">
        <div className="textd innerdiv">
          <p className="autherN">
            Hi, I am <span> Himayat Ullah</span>
          </p>
          <h3>
            <Typical
              steps={["Front End dev 💻", 2000, "React js dev ❤️", 1500]}
              loop={Infinity}
              wrapper="p"
            />
          </h3>
          <p className="usertext">
            Hi, I'm Himayat Ullah, and I graduated from the Islamia college
            university peshawar in 2022 with a degree in Software Engineering.
          </p>
          <button className="cvbutton buttond">
            <a href={pdf}>Download CV</a>
          </button>
          <button className="buttond contbutton" onClick={ToContact}>
            Contact
          </button>
        </div>
        <div className="imgd innerdiv">
          <img src={image} alt="Not found" />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
