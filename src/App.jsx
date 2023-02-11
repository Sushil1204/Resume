import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="bg-neutral-200">
      <Header />
      <Skills />
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
