import React from "react";
import { Link } from "react-router-dom";
import data from "../data/guitartabs.json";

const Tabs = () => {
  const { tabs } = data;

  return (
    <section>
      <div className="container px-5 py-10  mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Tabs
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 gap-10">
          {tabs.map((tab) => (
            <Link to={`/tabs/${tab.id}`} key={JSON.stringify(tab)}>
              {" "}
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={tab.cover}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  {tab.band}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  {tab.name}
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  {tab.year}
                </h3>
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  Tuning: {tab.tuning}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
