import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandFirebase } from "react-icons/tb";

let data = [
  {
    key: 1,
    img: <FaHtml5 className="icond" />,
    label: "HTML",
    value: "HTML is the standard markup language for creating Web pages.",
    href: "https://html.com/",
    targ: "_blank",
  },
  {
    key: 2,
    img: <FaCss3Alt className="icond" />,
    label: "CSS",
    value: "CSS is the language for describing the presentation of Web pages.",
    href: "https://www.w3schools.com/css/",
    targ: "_blank",
  },
  {
    key: 3,
    img: <FaBootstrap className="icond" />,
    label: "BootStrap",
    value: "the world’s most popular framework for building responsive.",
    href: "https://getbootstrap.com/",
    targ: "_blank",
  },
  {
    key: 4,
    img: <DiJavascript1 className="icond" />,
    label: "JavaScript",
    value: "JavaScript is the world's most popular programming language.",
    href: "https://www.javascript.com/",
    targ: "_blank",
  },
  {
    key: 5,
    img: <FaReact className="icond" />,
    label: "React JS",
    value:
      "React is a JavaScript library created by Facebook React is a User Interface (UI) library.",
    href: "https://reactjs.org/",
    targ: "_blank",
  },
  {
    key: 6,
    img: <TbBrandFirebase className="icond" />,
    label: "Firebase Basics",
    value:
      "Firebase is a real-time database that allows storing a list of objects in the form of a tree.",
    href: "https://firebase.google.com/",
    targ: "_blank",
  },
];

function Card() {
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

export default Card;
