import React from "react";
import NavBar from "./NavBar";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <MastHead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />

    </div>
  );
}

export default App;

