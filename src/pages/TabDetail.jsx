import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/guitartabs.json";
const TabDetail = () => {
  const { tabs } = data;
  const { id } = useParams();
  const [actualTab, setActualTab] = useState();

  useEffect(() => {
    const tab = `../tabs/${id}.txt`
    fetch(tab)
      .then((r) => r.text())
      .then((text) => {
        setActualTab(text);
      });
  }, []);

  return (
    <section>
      <div className="container px-5 py-10 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={tabs[id].cover}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                  {tabs[id].name}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">{tabs[id].band}</p>
                <p className="text-base text-gray-400">{tabs[id].year}</p>
                <p className="text-base text-gray-400">
                  Tuning: {tabs[id].tuning}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <pre>{actualTab}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabDetail;
