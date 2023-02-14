import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { FaArrowUp } from "react-icons/fa";
import React, { useEffect, useState } from "react";

function App() {
  const [offset, setOffset] = useState(0);
  // const [off, setOff] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // console.log(offset);

  const scrollup = () => {
    window.scrollTo({
      top: 0,
      behavier: "smooth",
    });
  };
  return (
    <div>
      <Router>
        <Navbar />

        <button
          onClick={scrollup}
          className={offset > 0 ? "moveupd" : "moveupd1"}
        >
          <FaArrowUp />
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
