import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Novias from "./components/Novias";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Novias />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
