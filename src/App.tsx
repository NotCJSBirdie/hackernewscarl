import React from "react";
import Header from "./components/Header";
import Data from "./components/Data";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Tip from "./components/Tip";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Data />
      <Tip />
      <Footer />
      <Credits />
    </div>
  );
}

export default App;
