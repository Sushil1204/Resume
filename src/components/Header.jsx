import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logoWhite.png";
import profile from "../assets/profile.png";
import SushilPundkarResume from '../assets/SushilPundkarResume.pdf';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
// import ThemeToggle from "./ThemeToggle";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";
const Header = () => {
  const [state, setState] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
      <header className="py-5">
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <a href="/">
              {
                theme === "dark" ?
                (<img
                src={logoWhite}
                width={120}
                height={10}
                className="w-24 h-14"
                alt="Float UI logo"
              />):(
                <img
                src={logo}
                width={120}
                height={10}
                className="w-24 h-14"
                alt="Float UI logo"
              />
              )}
            </a>
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <div className="order-1 flex-1 justify-end items-end space-y-5 md:flex md:space-x-6 md:space-y-0">
              <li className="order-2 pb-5 md:pb-0 space-x-2">
                <a href="https://www.linkedin.com/in/sushil-pundkar-a9ba8b185/">
                  <AiFillLinkedin className="text-4xl text-indigo-600 dark:text-gray-100 text-center focus:shadow-none block md:inline cursor-pointer" />
                </a>
                <a href="https://twitter.com/Pundkar12">
                  <AiOutlineTwitter className="text-4xl text-indigo-600 dark:text-gray-100 text-center focus:shadow-none block md:inline cursor-pointer" />
                </a>
                <a href="https://github.com/Sushil1204">
                  <AiFillGithub className="text-4xl text-indigo-600 dark:text-gray-100  text-center focus:shadow-none block md:inline cursor-pointer" />
                </a>
                {theme === 'dark' ? (
              <MdOutlineWbSunny
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-4xl text-indigo-600 dark:text-white text-center focus:shadow-none block md:inline cursor-pointer"
              />
          ) : (
                  <MdOutlineDarkMode
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="text-4xl text-indigo-600 text-center focus:shadow-none block md:inline cursor-pointer"
                  />
              )}
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-24 px-4 items-center lg:flex md:px-8 place-items-center">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-4xl md:text-5xl mb-4 font-bold text-black dark:text-gray-100">
                Hi, I am Sushil Pundkar
                <span className="lg:inline-block text-indigo-600">
                  Frontend Developer
                </span>
              </h1>
              <p className="mb-8 leading-relaxed dark:text-gray-100">
                I'm a frontend developer with a passion for building intuitive
                and engaging user experiences. My skills include HTML, CSS,
                JavaScript, and React. I'm always eager to learn and try new
                technologies. Let's connect!
              </p>
              <div className="flex justify-center">
                <a href={SushilPundkarResume} className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" download>
                  Download my CV
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-full p-2 w-96 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] mx-auto"
                alt="hero"
                src={profile}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;
