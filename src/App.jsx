import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Expirence from "./components/expirence/Expirence";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import About_me from "./components/about_me/About_me";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About_me />
      <Expirence />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
