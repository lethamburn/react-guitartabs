import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/guitartabs.json";

const Tabs = () => {
  const { tabs } = data;
  const [keyword, setKeyword] = useState("");
  const filteredTabs = tabs.filter((tab) =>
    tab.name.toLowerCase().includes(keyword.toLowerCase()) ||
    tab.band.toLowerCase().includes(keyword.toLowerCase()) 
  );

  return (
    <section className="tabs">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Tablatures
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of tablatures of Guitar tabs
          </p>
          <p className="font-light text-gray-500 lg:mb-2 sm:text-m dark:text-gray-400">
           Find your tablature by name or band
          </p>
          <input
            type="text"
            placeholder=" 🔎"
            onChange={(ev) => setKeyword(ev.target.value)}
          />
          
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {filteredTabs.map((tab) => (
            <Link to={`/tabs/${tab.id}`}>
              <div className="items-center bg-gray-800 bg-opacity-40 rounded-lg shadow sm:flex bg-gray-800 bg-opacity-40 dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cover"
                    src={tab.cover}
                    alt={tab.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {tab.name}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {tab.band}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {tab.year}
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Tuning: {tab.tuning}
                  </p>
                </div>
              </div>{" "}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
