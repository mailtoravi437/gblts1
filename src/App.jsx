import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Logistic from "./Logistic";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Hero6 from "./Hero6";
import Hero7 from "./Hero7";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SectionImg from "./SectionImg";
import Clientle from "./Clientle";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Hero />
      <Logistic />
      <Hero7/>
      <Clientle/>
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <SectionImg/>
      <Hero6 />
      <ContactForm />
      <Footer />
      </Router>
    </>
  );
}

export default App;
