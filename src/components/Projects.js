import React from "react";
import image from "../img/calculator.png";
import clock from "../img/clock.png";
import counter from "../img/counter.png";
import changer from "../img/changer.png";
import { FaGithubSquare } from "react-icons/fa";

let data = [
  {
    key: 1,
    img: <img src={image} alt="Not Found" className="icond" />,
    label: "Calculator",
    value:
      "This is a Basic Calculator App with functionalities like addition, subtraction, multiplication and division.",
    href: "https://himayat-ullah.github.io/Calculator/",
    targ: "_blank",
  },
  {
    key: 2,
    img: <img src={clock} alt="Not Found" className="icond" />,
    label: "Clock",
    value: "It is simple clock to show perfect time.",
    href: "https://himayat-ullah.github.io/Clock/",
    targ: "_blank",
  },
  {
    key: 3,
    img: <img src={counter} alt="Not Found" className="icond" />,
    label: "Words Counter",
    value: "To count the words.",
    href: "https://himayat-ullah.github.io/Words-Counter/",
    targ: "_blank",
  },
  {
    key: 4,
    img: <img src={changer} alt="Not Found" className="icond" />,
    label: "Color Changer",
    value: "Click on the color button to change the text color.",
    href: "https://himayat-ullah.github.io/Color-Change-on-button/",
    targ: "_blank",
  },
  {
    key: 5,
    img: <FaGithubSquare className="icond" color={"black"} />,
    label: "GitHub Repo",
    value: "It's my GitHub repositry.",
    href: "https://github.com/",
    targ: "_blank",
  },
];

function Projects() {
  return (
    <div className="cardd">
      {data.map((item, key) => {
        return (
          <a className="aboutd" href={item.href} target={item.targ} key={key}>
            {item.img}
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
