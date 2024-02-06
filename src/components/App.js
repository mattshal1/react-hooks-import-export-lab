import React from "react";
import NavBar from "./NavBar"; 
import Home from "./Home"; 
import About from "./About"; 

function App() {
  return (
    <div>
      <NavBar /> {/* Render NavBar component */}
      <Home /> {/* Render Home component */}
      <About /> {/* Render About component */}
    </div>
  );
}

export default App;