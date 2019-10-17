import React from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
