import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Layouts/Navbar";
import Hero from "./features/Hero";
import Projects from "./features/Projects";
import About from "./features/About";
import Connect  from "./features/Connect"


function App() {
  return (
    <>
      <main className="bg-black min-h-screen">
        <Navbar/>
        <Hero/>
        <Projects/>
        <About/>
        <Connect/>
      </main>
    </>
  );
}

export default App;

