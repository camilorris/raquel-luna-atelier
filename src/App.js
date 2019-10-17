import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Novias from "./components/Novias";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Novias />
    </main>
  );
};

export default App;
