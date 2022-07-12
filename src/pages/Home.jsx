import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <section>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Welcome to Guitar Tabs
            </h1>
            <p className="mb-8 leading-relaxed">
              Your personal web application to store your favorite guitar tabs.
            </p>
            <div className="flex justify-center">
              <Link to="tabs">
                <button className="inline-flex text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">
                  Let's start playing
                </button>
              </Link>
              <Link to="about">
                <button className="ml-4 inline-flex text-gray-400 bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 hover:text-white rounded text-lg">
                  About
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Guitar Player"
              src="./assets/images/loop.gif"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
