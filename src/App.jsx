import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

function App() {

  return (
    <ThemeProvider>
      <div className="bg-neutral-200 dark:bg-slate-800">
        <Header />
        <Skills />
        <Projects/>
        <Blogs/>
        <Contact/>
      </div>
    </ThemeProvider>
  );
}

export default App;
