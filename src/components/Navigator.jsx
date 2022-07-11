import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <header className="navigator">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            className="logo"
            src="./assets/icons/logo.png"
            alt="Guitar icon"
          />
          <span className="ml-3 text-xl">Guitar Tabs</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/playthrough">
            <span className="mr-5 hover:text-white">Playthrough</span>
          </Link>

          <Link to="/tabs">
            <span className="mr-5 hover:text-white">Tabs</span>
          </Link>
          <Link to="/progress">
            <span className="mr-5 hover:text-white">Progress</span>
          </Link>
          <Link to="/about">
            <span className="mr-5 hover:text-white">About</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigator;
