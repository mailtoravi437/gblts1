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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logistic />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      {/* <Hero7 /> */}
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
