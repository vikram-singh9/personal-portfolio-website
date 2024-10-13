import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Message from "./Components/Message";
import Footer from "./Components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Message />
      <Footer />
    </>
  );
};

export default HomePage;
