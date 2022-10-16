import React from "react";
import Connected from "./components/Connected/Connected";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mentors from "./components/Mentors/Mentors";
import Services from "./components/Services-Section/Services";
import Story from "./components/Story-Section/Story";
import Training from "./components/Training/Training";

function App() {
  return (
    <>
    <Header />
    <Story />
    <Services />
    <Features />
    <Connected />
    <Training />
    <Mentors />
    <Footer />
    </>
  );
}

export default App;
