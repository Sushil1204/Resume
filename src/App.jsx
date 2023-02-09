import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import axios from "axios";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  const [portfolio, setPortfolio] = useState([])

  const getProjects = async () => {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Sushil1204/projects/db/"
    );
    if (response.status === 200) {
      setPortfolio(response.data.projects);
    }
  };

  useEffect(() => {
    getProjects();
    },[]);
  return (
    <>
      <Header />
      <Skills />
      <Projects portfolio={portfolio}/>
      <Blogs/>
      <Contact/>
    </>
  );
}

export default App;
