import About from "@/components/Homepage/About";
import Articles from "@/components/Homepage/Articles";
import Benifits from "@/components/Homepage/Benifits";
import Clients from "@/components/Homepage/Clients";
import Contact from "@/components/Homepage/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Navbar";
import OurWork from "@/components/Homepage/OurWork";
import Services from "@/components/Homepage/Services";
import React from "react";

const index = () => {
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <main className="main">
          <Hero />
          <About />
          <Services />
          <Clients />
          <OurWork />
          <Benifits />
          <Articles />
          <Contact />
          
        </main>
        <Footer />
      </div>
    </>
  );
};

export default index;
