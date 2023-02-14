import React, { useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ThemeProvider>
      <div className="bg-neutral-200 dark:bg-slate-800">
        <Header />
        <Skills />
        <Projects/>
        <Blogs/>
        <Contact/>
      {visible && (<button
        class="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full float-right -mt-14 outline-none animate-bounce "
        onClick={scrollToTop}
      >
        <p className="text-xl">Go Up</p>
      </button>)}
      </div>
    </ThemeProvider>
  );
}

export default App;
